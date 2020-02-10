import { environment } from '@environments/environment';

/**
 * Build a sprite url, based on given parameters.
 * @param id the pokemon id.
 * @param back if you need the backward sprite (optional)
 * @param shiny if you need the shiny sprite (optional)
 */
export const getSpriteUrl = (
  id: number,
  back?: boolean,
  shiny?: boolean
): string => {
  let backPath = '';
  let shinyPath = '';
  if (back) {
    backPath = 'back/';
  }
  if (shiny) {
    shinyPath = 'shiny/';
  }
  return `${environment.pokeApiSpriteUrl}${backPath}${shinyPath}${id}${environment.pokeApiSpriteExt}`;
};

/**
 * Extracts the pokemon id from url.
 * @param url pokemon location path.
 */
export const getPokemonId = (url: string): number => {
  return Number(
    url.replace(environment.pokeApiBaseUrl, '').replace(/\D*/gm, '')
  );
};
