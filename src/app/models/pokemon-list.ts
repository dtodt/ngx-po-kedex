
export interface PokemonListModel {
  nr: number;
  name: string;
  url: string;
  sprite: string;
}

export interface PokemonListResult {
  count: number;
  next: string;
  previous: string;
  results: PokemonListModel[];
}
