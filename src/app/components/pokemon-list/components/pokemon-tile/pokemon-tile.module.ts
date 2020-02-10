import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';

import { PokemonTitleModule } from '@app/components/pokemon-title/pokemon-title.module';

import { PokemonTileComponent } from './pokemon-tile.component';

@NgModule({
  declarations: [PokemonTileComponent],
  exports: [PokemonTileComponent],
  imports: [CommonModule, MatRippleModule, FlexLayoutModule, PokemonTitleModule]
})
export class PokemonTileModule {}
