export interface PokemonListModel {
  nr: number;
  name: string;
  sprite: string;
  url?: string;
}

export interface PokemonListResult {
  count: number;
  next: string;
  previous: string;
  results: PokemonListModel[];
}

export interface PokemonListRequest {
  offset: number;
  limit: number;
  last?: boolean;
}
