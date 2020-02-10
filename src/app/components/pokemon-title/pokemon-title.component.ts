import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-title',
  templateUrl: './pokemon-title.component.html'
})
export class PokemonTitleComponent {
  @Input() id = 0;
  @Input() name = '';
  @Input() favorite = false;
  /**
   * Emit events when the star is clicked.
   */
  @Output() toggleFavorite = new EventEmitter<number>();
  /**
   * Emitting events to keep the component as simple as possible.
   */
  starClicked(): void {
    this.toggleFavorite.emit(this.id);
  }
}
