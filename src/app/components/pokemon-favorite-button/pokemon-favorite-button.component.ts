import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-favorite-button',
  templateUrl: './pokemon-favorite-button.component.html'
})
export class PokemonFavoriteButtonComponent {
  @Input() favorite = false;
}
