import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PokemonListModel } from '@app/models';

/**
 * Carry the pokemon information inside the list.
 */
@Component({
  selector: 'app-pokemon-tile',
  templateUrl: './pokemon-tile.component.html',
  styleUrls: ['./pokemon-tile.component.sass']
})
export class PokemonTileComponent {
  @Input() favorite: boolean;
  @Input() pokemon: PokemonListModel;
  /**
   * Emit events when the card is clicked.
   */
  @Output() displayDetails = new EventEmitter<number>();
  /**
   * Emit events when the star is clicked.
   */
  @Output() toggleFavorite = new EventEmitter<number>();

  /**
   * Emitting events to keep the component as simple as possible.
   */
  cardClicked(): void {
    this.displayDetails.emit(this.pokemon.nr);
  }
  starClicked(id?: number): void {
    this.toggleFavorite.emit(id);
  }
}
