import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { catchError, tap } from 'rxjs/operators';

import { PokemonDetailResult } from '@app/models';
import { NavigationFailed } from '@app/state/app.actions';
import { PokeApiService } from '@app/poke-api.service';

import {
  GetPokemonDetails,
  GetPokemonDetailsDone
} from './pokemon-details.actions';

export class PokemonDetailsStateModel {
  public details: PokemonDetailResult;
  public loading: boolean;
}

@State<PokemonDetailsStateModel>({
  name: 'pokemonDetails',
  defaults: {
    details: {},
    loading: false
  }
})
@Injectable()
export class PokemonDetailsState {
  @Selector() static details(
    state: PokemonDetailsStateModel
  ): PokemonDetailResult {
    return state.details;
  }
  @Selector() static loading(state: PokemonDetailsStateModel): boolean {
    return state.loading;
  }

  constructor(private pokeApiSvc: PokeApiService) {}

  /**
   * Load pokemon details.
   */
  @Action(GetPokemonDetails)
  getPokemonDetails(
    ctx: StateContext<PokemonDetailsStateModel>,
    action: GetPokemonDetails
  ) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.loading = true;
      })
    );
    return this.pokeApiSvc.getPokemonDetails(action.id).pipe(
      tap(result => ctx.dispatch(new GetPokemonDetailsDone(null, result))),
      catchError(error => ctx.dispatch(new GetPokemonDetailsDone(error)))
    );
  }

  /**
   * Called when the api call returns.
   */
  @Action(GetPokemonDetailsDone)
  getPokemonDetailsDone(
    ctx: StateContext<PokemonDetailsStateModel>,
    action: GetPokemonDetailsDone
  ) {
    if (action.details) {
      return ctx.dispatch(new NavigationFailed());
    }
    ctx.setState(
      produce(ctx.getState(), draft => {
        if (action.result) {
          draft.details = action.result;
        }
        draft.loading = false;
      })
    );
  }
}
