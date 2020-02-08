import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';

import { PokemonListModel } from '@app/models';

import { FavoritePokemon, UnFavoritePokemon } from './app.actions';

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
}
