import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PokemonFavoriteButtonModule } from '@app/components/pokemon-favorite-button/pokemon-favorite-button.module';
import { PokemonTypeModule } from '@app/components/pokemon-type/pokemon-type.module';

import { PokemonPortraitComponent } from './pokemon-portrait.component';

@NgModule({
  declarations: [PokemonPortraitComponent],
  exports: [PokemonPortraitComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    PokemonTypeModule,
    PokemonFavoriteButtonModule
  ]
})
export class PokemonPortraitModule {}
