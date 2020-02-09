import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PokemonFavoriteButtonComponent } from './pokemon-favorite-button.component';

@NgModule({
  declarations: [PokemonFavoriteButtonComponent],
  exports: [PokemonFavoriteButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class PokemonFavoriteButtonModule {}
