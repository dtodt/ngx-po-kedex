import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';

import { PokemonFavoriteButtonModule } from '@app/components/pokemon-favorite-button/pokemon-favorite-button.module';

import { PokemonTileComponent } from './pokemon-tile.component';

@NgModule({
  declarations: [PokemonTileComponent],
  exports: [PokemonTileComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    FlexLayoutModule,
    PokemonFavoriteButtonModule
  ]
})
export class PokemonTileModule {}
