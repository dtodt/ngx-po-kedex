import { Injectable } from '@angular/core';

import { PokemonListModel, PokemonListRequest } from '@app/models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NationalService {
  /**
   * Pokemon page content count.
   */
  private pokemonCount = 20;
  /**
   * Currently the last unique pokemon from the api.
   */
  private lastPokemon = 807;
  private spriteExtension = '.png';

  constructor() {}

  /**
   * Fill missing info from pokemon.
   * @param results list of pokemon.
   */
  fillPokemonList(results: PokemonListModel[]): PokemonListModel[] {
    return results.map(pokemon => {
      return { ...pokemon, ...this.extractMissingInfo(pokemon.url) };
    });
  }

  getNextPage(currentPokemon: number): PokemonListRequest {
    // We don't need a request above the limit.
    if (currentPokemon >= this.lastPokemon - 1) {
      return null;
    }

    // The sum of offset and limit must be inside the range 0 ~ maxPokemonIndex.
    const request: PokemonListRequest = {
      offset: currentPokemon,
      limit: Math.min(
        this.pokemonCount,
        Math.abs(this.lastPokemon - currentPokemon)
      )
    };

    // if the limit is less than the pokemon count, then we finished.
    request.last = request.limit < this.pokemonCount;

    return request;
  }

  /**
   * Extracts the number and sprite url from pokemon url.
   * @param url pokemon details url.
   */
  private extractMissingInfo(url: string): object {
    const nr = this.extractPokemonNumber(url);
    return {
      nr,
      sprite: `${environment.pokeApiSpriteUrl}${nr}${this.spriteExtension}`
    };
  }

  /**
   * Extracts the number from pokemon url.
   * @param url pokemon details url.
   */
  private extractPokemonNumber(url: string): number {
    return Number(
      url.replace(environment.pokeApiBaseUrl, '').replace(/\D*/gm, '')
    );
  }
}
