import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';

import { PokemonTypeComponent } from './pokemon-type.component';

@NgModule({
  declarations: [PokemonTypeComponent],
  exports: [PokemonTypeComponent],
  imports: [CommonModule, FlexLayoutModule, MatChipsModule]
})
export class PokemonTypeModule {}
