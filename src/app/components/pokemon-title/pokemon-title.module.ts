import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PokemonFavoriteButtonModule } from '@app/components/pokemon-favorite-button/pokemon-favorite-button.module';

import { PokemonTitleComponent } from './pokemon-title.component';

@NgModule({
  declarations: [PokemonTitleComponent],
  exports: [PokemonTitleComponent],
  imports: [CommonModule, FlexLayoutModule, PokemonFavoriteButtonModule]
})
export class PokemonTitleModule {}
