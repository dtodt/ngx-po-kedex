import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { PokemonListModel } from '@app/models';
import { AppState, FavoritePokemonMap } from '@app/state/app.state';
import {
  FavoritePokemonToggle,
  NavigatePokemonDetails
} from '@app/state/app.actions';

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
    this.store.dispatch(new NavigatePokemonDetails(id));
  }

  starClicked(id?: number): void {
    const pokemons = this.store.selectSnapshot(NationalState.pokemons);
    const found = pokemons.find(pokemon => pokemon.nr === id);
    if (found) {
      this.store.dispatch(new FavoritePokemonToggle(found));
    }
  }

  favoriteCount(): number {
    const favorites = this.store.selectSnapshot(AppState.favorites);
    if (favorites) {
      return Object.keys(favorites).length;
    }
    return;
  }
}
