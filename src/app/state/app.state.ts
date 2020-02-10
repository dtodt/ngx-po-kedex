import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { Navigate } from '@ngxs/router-plugin';

import { PokemonListModel } from '@app/models';

import {
  FavoritePokemon,
  UnFavoritePokemon,
  FavoritePokemonToggle,
  NavigationFailed,
  NavigatePokemonDetails
} from './app.actions';

export interface FavoritePokemonMap {
  [key: number]: PokemonListModel;
}

export class AppStateModel {
  public favorites: FavoritePokemonMap;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    favorites: {}
  }
})
@Injectable()
export class AppState {
  @Selector() static favorites(state: AppStateModel): FavoritePokemonMap {
    return state.favorites;
  }

  /**
   * Choose between favorite or un-favorite a pokemon.
   */
  @Action(FavoritePokemonToggle)
  favoritePokemonToggle(
    ctx: StateContext<AppStateModel>,
    action: FavoritePokemonToggle
  ) {
    if (action.pokemon && action.pokemon.nr) {
      const pokemon = action.pokemon;
      const favorites = ctx.getState().favorites;
      if (favorites[pokemon.nr]) {
        return ctx.dispatch(new UnFavoritePokemon(pokemon.nr));
      } else {
        return ctx.dispatch(new FavoritePokemon(pokemon));
      }
    }
  }

  /**
   * Mark pokemon as favorite.
   */
  @Action(FavoritePokemon)
  favoritePokemon(ctx: StateContext<AppStateModel>, action: FavoritePokemon) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.favorites[action.pokemon.nr] = action.pokemon;
      })
    );
  }

  /**
   * Remove pokemon from favorite map.
   */
  @Action(UnFavoritePokemon)
  unFavoritePokemon(
    ctx: StateContext<AppStateModel>,
    action: UnFavoritePokemon
  ) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        delete draft.favorites[action.id];
      })
    );
  }

  /**
   * Go to details page.
   */
  @Action(NavigatePokemonDetails)
  navigatePokemonDetails(
    ctx: StateContext<AppStateModel>,
    action: NavigatePokemonDetails
  ) {
    return ctx.dispatch(new Navigate(['/pokemon-details', action.id]));
  }

  /**
   * Go to not-found page.
   */
  @Action(NavigationFailed)
  navigationFailed(ctx: StateContext<AppStateModel>) {
    return ctx.dispatch(new Navigate(['/not-found']));
  }
}
