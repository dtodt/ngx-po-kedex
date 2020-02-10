import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { PokemonListModel } from '@app/models';
import { AppState, FavoritePokemonMap } from '@app/state/app.state';
import {
  NavigationHome,
  NavigatePokemonDetails,
  UnFavoritePokemon
} from '@app/state/app.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {
  @Select(AppState.favorites) favorites$: Observable<FavoritePokemonMap>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (!this.pokemons().length) {
      this.store.dispatch(new NavigationHome());
    }
  }

  pokemons(): PokemonListModel[] {
    const favorites = this.store.selectSnapshot(AppState.favorites);
    if (favorites) {
      return Object.values(favorites);
    }
    return [];
  }

  cardClicked(id?: number): void {
    this.store.dispatch(new NavigatePokemonDetails(id));
  }

  starClicked(id?: number): void {
    this.store.dispatch(new UnFavoritePokemon(id));
  }
}
