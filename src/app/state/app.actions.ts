import { PokemonListModel } from '@app/models';

export class FavoritePokemon {
  static readonly type = '[App] Favorite Pokemon';
  constructor(public pokemon: PokemonListModel) {}
}

export class UnFavoritePokemon {
  static readonly type = '[App] Un Favorite Pokemon';
  constructor(public id: number) {}
}
