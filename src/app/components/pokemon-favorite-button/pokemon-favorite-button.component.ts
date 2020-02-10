import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-favorite-button',
  templateUrl: './pokemon-favorite-button.component.html'
})
export class PokemonFavoriteButtonComponent {
  @Input() favorite = false;
  @Input() disabled = false;
  @Input() favoriteCount: number;

  getColor(): string {
    return this.favorite ? 'accent' : 'secondary';
  }

  getIcon(): string {
    return this.favorite || this.favoriteCount > 0 ? 'star' : 'star_border';
  }
}
