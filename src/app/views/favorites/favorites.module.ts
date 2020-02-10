import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderModule } from '@app/components/header/header.module';
import { PokemonListModule } from '@app/components/pokemon-list/pokemon-list.module';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FlexLayoutModule,
    PokemonListModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule {}
