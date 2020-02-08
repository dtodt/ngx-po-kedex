import { PokemonListRequest, PokemonListResult } from '@app/models';

export class GetPokemonList {
  static readonly type = '[National] Get Pokemon List';
  constructor(public request?: PokemonListRequest) {}
}

export class GetPokemonListDone {
  static readonly type = '[National] Get Pokemon List Done';
  constructor(
    public details?: any,
    public result?: PokemonListResult,
    public reset?: boolean
  ) {}
}

export class GetMorePokemon {
  static readonly type = '[National] Get More Pokemon';
}

export class ResetPokemonList {
  static readonly type = '[National] Reset Pokemon List';
}
