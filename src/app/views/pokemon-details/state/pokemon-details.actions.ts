import { PokemonDetailResult } from '@app/models';

export class GetPokemonDetails {
  static readonly type = '[PokemonDetails] Get Pokemon Details';
  constructor(public id: number) {}
}

export class GetPokemonDetailsDone {
  static readonly type = '[PokemonDetails] Get Pokemon Details Done';
  constructor(public details?: any, public result?: PokemonDetailResult) {}
}
