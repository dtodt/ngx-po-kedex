import { Injectable } from '@angular/core';

import { PokemonListModel } from '@app/models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NationalService {

  private spriteExtension = '.png';

  constructor() {}

  /**
   * Fill missing info from pokemon.
   * @param results list of pokemon.
   */
  fillPokemonList(results: PokemonListModel[]): PokemonListModel[] {
    results.forEach((pokemon: PokemonListModel) => {
      pokemon = {...pokemon, ...this.extractMissingInfo(pokemon.url)};
    });
    return results.map((pokemon) => {
      return {...pokemon, ...this.extractMissingInfo(pokemon.url)}
    });
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
    return Number(url.replace(environment.pokeApiBaseUrl, '').replace(/\D*/gm, ''));
  }

}
