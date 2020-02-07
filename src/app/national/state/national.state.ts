import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store, NgxsOnInit, NgxsAfterBootstrap } from '@ngxs/store';
import { produce } from 'immer';
import { catchError, tap } from 'rxjs/operators';

import { PokemonListModel } from '@app/models';
import { PokeApiService } from '@app/poke-api.service';

import { NationalService } from '../national.service';
import { GetPokemonList, GetPokemonListDone } from './national.actions';

export class NationalStateModel {
  public pokemons: PokemonListModel[];
  public loading: boolean;
}

@State<NationalStateModel>({
  name: 'national',
  defaults: {
    pokemons: [],
    loading: false
  }
})
@Injectable()
export class NationalState implements NgxsOnInit {

  @Selector() static pokemons(state: NationalStateModel): PokemonListModel[] {
    return state.pokemons;
  }

  @Selector() static loading(state: NationalStateModel): boolean {
    return state.loading;
  }

  constructor(private store: Store, private nationalSvc: NationalService, private pokeApiSvc: PokeApiService) {}

  ngxsOnInit(ctx: StateContext<NationalStateModel>) {
    ctx.dispatch(new GetPokemonList());
  }

  /**
   * Load pokemon list.
   */
  @Action(GetPokemonList)
  getPokemonList(ctx: StateContext<NationalStateModel>, action: GetPokemonList) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.pokemons = [];
        draft.loading = true;
      })
    );
    return this.pokeApiSvc.getPokemonList(action.offset, action.limit)
      .pipe(
        tap(entities => ctx.dispatch(new GetPokemonListDone(null, entities))),
        catchError(error => ctx.dispatch(new GetPokemonListDone(error)))
      );
  }

  /**
   * Called when the api call returns.
   */
  @Action(GetPokemonListDone)
  getPokemonListDone(ctx: StateContext<NationalStateModel>, action: GetPokemonListDone) {
    if (action.details) {
      console.log(action.details);
    }
    ctx.setState(
      produce(ctx.getState(), draft => {
        if (action.result) {
          draft.pokemons = this.nationalSvc.fillPokemonList(action.result.results);
        }
        draft.loading = false;
      })
    );
  }

}
