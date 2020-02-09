import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { PokemonListModel } from '@app/models';
import { AppState, FavoritePokemonMap } from '@app/state/app.state';
import { FavoritePokemon, UnFavoritePokemon } from '@app/state/app.actions';

import { GetMorePokemon, ResetPokemonList } from './state/national.actions';
import { NationalState } from './state/national.state';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.sass']
})
export class NationalComponent {
  @Select(AppState.favorites) favorites$: Observable<FavoritePokemonMap>;

  @Select(NationalState.hasMore) hasMore$: Observable<boolean>;
  @Select(NationalState.loading) loading$: Observable<boolean>;
  @Select(NationalState.pokemons) pokemons$: Observable<PokemonListModel[]>;

  constructor(private store: Store) {}

  loadMore(): void {
    this.store.dispatch(new GetMorePokemon());
  }

  reset(): void {
    this.store.dispatch(new ResetPokemonList());
  }

  cardClicked(id?: number): void {
    console.log('Card clicked', id);
  }

  starClicked(id?: number): void {
    const favorites = this.store.selectSnapshot(AppState.favorites);
    if (favorites[id]) {
      this.store.dispatch(new UnFavoritePokemon(id));
    } else {
      const pokemons = this.store.selectSnapshot(NationalState.pokemons);
      const favorite = pokemons.find(pokemon => pokemon.nr === id);
      this.store.dispatch(new FavoritePokemon(favorite));
    }
  }
}
