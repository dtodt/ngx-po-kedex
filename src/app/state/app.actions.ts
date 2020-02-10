import { PokemonListModel } from '@app/models';

export class FavoritePokemon {
  static readonly type = '[App] Favorite Pokemon';
  constructor(public pokemon: PokemonListModel) {}
}

export class FavoritePokemonToggle {
  static readonly type = '[App] Favorite Pokemon Toggle';
  constructor(public pokemon: PokemonListModel) {}
}

export class UnFavoritePokemon {
  static readonly type = '[App] Un Favorite Pokemon';
  constructor(public id: number) {}
}

export class NavigationFailed {
  static readonly type = '[App] Navigation Failed';
}

export class NavigateFavoritePokemons {
  static readonly type = '[App] Navigate Favorite Pokemons';
}

export class NavigationHome {
  static readonly type = '[App] Navigation Failed';
}

export class NavigatePokemonDetails {
  static readonly type = '[App] Navigate Pokemon Details';
  constructor(public id?: number) {}
}
