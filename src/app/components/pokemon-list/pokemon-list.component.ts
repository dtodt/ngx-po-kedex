import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PokemonListModel } from '@app/models';
import { FavoritePokemonMap } from '@app/state/app.state';

/**
 * Wraps all cards together.
 */
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  @Input() favorites: FavoritePokemonMap;
  @Input() pokemons: PokemonListModel[];
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
  cardClicked(id?: number): void {
    this.displayDetails.emit(id);
  }

  starClicked(id?: number): void {
    this.toggleFavorite.emit(id);
  }
}
