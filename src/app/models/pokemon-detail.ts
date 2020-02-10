export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypeSlot {
  type: PokemonType;
}

export interface PokemonDetailResult {
  id?: number;
  name?: string;
  types?: PokemonTypeSlot[];
  height?: number;
  weight?: number;
}
