import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
// import { NationalAction } from './national.actions';

export interface PokemonListModel {
  number: number;
  name: string;
  url: string;
  sprite: string;
}

export class NationalStateModel {
  public pokemons: PokemonListModel[];
}

@State<NationalStateModel>({
  name: 'national',
  defaults: {
    pokemons: []
  }
})
@Injectable()
export class NationalState {}
