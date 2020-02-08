import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { PokemonListModel } from '@app/models';

import { GetMorePokemon, ResetPokemonList } from './state/national.actions';
import { NationalState } from './state/national.state';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.sass']
})
export class NationalComponent {
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
}
