import { Component, Input } from '@angular/core';

import { PokemonTypeSlot } from '@app/models';
import { getSpriteUrl } from '@app/util/pokemon-url';

@Component({
  selector: 'app-pokemon-portrait',
  templateUrl: './pokemon-portrait.component.html'
})
export class PokemonPortraitComponent {
  @Input() id = 0;
  @Input() name = '';
  @Input() back = false;
  @Input() shiny = false;
  @Input() favorite = false;
  @Input() types: PokemonTypeSlot[] = [];

  /**
   * Depending on user interation, changes the pokemon portrait.
   */
  getPortrait(): string {
    return getSpriteUrl(this.id, this.back, this.shiny);
  }
}
