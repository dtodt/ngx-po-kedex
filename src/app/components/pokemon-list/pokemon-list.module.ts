import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PokemonTileModule } from '@app/components/pokemon-tile/pokemon-tile.module';

import { PokemonListComponent } from './pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent],
  exports: [PokemonListComponent],
  imports: [CommonModule, FlexLayoutModule, PokemonTileModule]
})
export class PokemonListModule {}
