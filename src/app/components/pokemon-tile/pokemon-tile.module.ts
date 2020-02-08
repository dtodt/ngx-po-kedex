import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PokemonTileComponent } from './pokemon-tile.component';

@NgModule({
  declarations: [PokemonTileComponent],
  exports: [PokemonTileComponent],
  imports: [CommonModule, FlexLayoutModule]
})
export class PokemonTileModule {}
