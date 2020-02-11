export interface PokemonStat {
  name: string;
}

export interface PokemonStatSlot {
  base_stat: number;
  stat: PokemonStat;
}

export interface PokemonType {
  name: string;
}

export interface PokemonTypeSlot {
  type: PokemonType;
}

export interface PokemonDetailResult {
  id?: number;
  name?: string;
  height?: number;
  weight?: number;
  stats?: PokemonStatSlot[];
  types?: PokemonTypeSlot[];
}
