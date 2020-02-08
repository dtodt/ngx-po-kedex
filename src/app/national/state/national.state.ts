import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, NgxsOnInit } from '@ngxs/store';
import { produce } from 'immer';
import { catchError, tap } from 'rxjs/operators';

import { PokemonListModel } from '@app/models';
import { PokeApiService } from '@app/poke-api.service';

import { NationalService } from '../national.service';
import {
  GetPokemonList,
  GetPokemonListDone,
  GetMorePokemon
} from './national.actions';

export class NationalStateModel {
  public pokemons: PokemonListModel[];
  public lastPokemon: number;
  public loading: boolean;
  public hasMore: boolean;
}

@State<NationalStateModel>({
  name: 'national',
  defaults: {
    pokemons: [],
    lastPokemon: 0,
    loading: false,
    hasMore: false
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

  @Selector() static hasMore(state: NationalStateModel): boolean {
    return state.hasMore;
  }

  constructor(
    private nationalSvc: NationalService,
    private pokeApiSvc: PokeApiService
  ) {}

  ngxsOnInit(ctx: StateContext<NationalStateModel>) {
    ctx.dispatch(new GetMorePokemon());
  }

  /**
   * Load pokemon list.
   */
  @Action(GetPokemonList)
  getPokemonList(
    ctx: StateContext<NationalStateModel>,
    action: GetPokemonList
  ) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.loading = true;
      })
    );
    return this.pokeApiSvc.getPokemonList(action.request).pipe(
      tap(entities => ctx.dispatch(new GetPokemonListDone(null, entities))),
      catchError(error => ctx.dispatch(new GetPokemonListDone(error)))
    );
  }

  /**
   * Called when the api call returns.
   */
  @Action(GetPokemonListDone)
  getPokemonListDone(
    ctx: StateContext<NationalStateModel>,
    action: GetPokemonListDone
  ) {
    if (action.details) {
      console.log(action.details);
    }
    ctx.setState(
      produce(ctx.getState(), draft => {
        if (action.result) {
          if (action.reset) {
            draft.pokemons = [];
          }
          draft.pokemons = [
            ...draft.pokemons,
            ...this.nationalSvc.fillPokemonList(action.result.results)
          ];
          draft.lastPokemon = draft.pokemons.length;
        }
        draft.loading = false;
      })
    );
  }

  /**
   * Load more pokemon from api.
   */
  @Action(GetMorePokemon)
  GetMorePokemon(
    ctx: StateContext<NationalStateModel>,
    action: GetMorePokemon
  ) {
    const request = this.nationalSvc.getNextPage(ctx.getState().lastPokemon);
    if (request) {
      ctx.setState(
        produce(ctx.getState(), draft => {
          draft.hasMore = !request.last;
        })
      );
      ctx.dispatch(new GetPokemonList(request));
    }
  }
}
