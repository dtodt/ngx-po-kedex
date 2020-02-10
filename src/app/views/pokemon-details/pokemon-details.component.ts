import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';

import { PokemonListModel, PokemonDetailResult } from '@app/models';
import { AppState, FavoritePokemonMap } from '@app/state/app.state';
import {
  FavoritePokemonToggle,
  NavigationFailed
} from '@app/state/app.actions';
import { getSpriteUrl } from '@app/util/pokemon-url';

import { GetPokemonDetails } from './state/pokemon-details.actions';
import { PokemonDetailsState } from './state/pokemon-details.state';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  @Select(AppState.favorites) favorites$: Observable<FavoritePokemonMap>;

  @Select(PokemonDetailsState.details) details$: Observable<
    PokemonDetailResult
  >;
  @Select(PokemonDetailsState.loading) loading$: Observable<boolean>;

  id: number;
  back = false;
  shiny = false;

  constructor(private activeRoute: ActivatedRoute, private store: Store) {
    this.id = Number(this.activeRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    if (isNaN(this.id)) {
      this.store.dispatch(new NavigationFailed());
      return;
    }
    this.store.dispatch(new GetPokemonDetails(this.id));
  }

  isFavorite(): boolean {
    const favorites = this.store.selectSnapshot(AppState.favorites);
    return favorites && !!favorites[this.id];
  }

  starClicked(): void {
    this.store.dispatch(
      new FavoritePokemonToggle(this.buildPokemonFromDetails())
    );
  }

  private buildPokemonFromDetails(): PokemonListModel {
    const details = this.store.selectSnapshot(PokemonDetailsState.details);
    return {
      nr: details.id,
      name: details.name,
      sprite: getSpriteUrl(details.id)
    };
  }
}
