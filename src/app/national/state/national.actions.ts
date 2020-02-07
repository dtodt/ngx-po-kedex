import { PokemonListResult } from '@app/models';

export class GetPokemonList {
  static readonly type = '[App] Get Pokemon List';
  constructor(public offset: number = 0, public limit: number = 20) {}
}

export class GetPokemonListDone {
  static readonly type = '[App] Get Pokemon List Done';
  constructor(public details?: any, public result?: PokemonListResult) {}
}
