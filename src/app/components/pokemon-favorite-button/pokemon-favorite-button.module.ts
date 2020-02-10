import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import { PokemonFavoriteButtonComponent } from './pokemon-favorite-button.component';

@NgModule({
  declarations: [PokemonFavoriteButtonComponent],
  exports: [PokemonFavoriteButtonComponent],
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule]
})
export class PokemonFavoriteButtonModule {}
