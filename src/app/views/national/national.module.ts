import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HeaderModule } from '@app/components/header/header.module';
import { PokemonListModule } from '@app/components/pokemon-list/pokemon-list.module';
import { PokemonFavoriteButtonModule } from '@app/components/pokemon-favorite-button/pokemon-favorite-button.module';

import { NationalRoutingModule } from './national-routing.module';
import { NationalComponent } from './national.component';

import { NationalState } from './state/national.state';

@NgModule({
  declarations: [NationalComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FlexLayoutModule,
    PokemonListModule,
    NationalRoutingModule,
    ButtonsModule.forRoot(),
    PokemonFavoriteButtonModule,
    NgxsModule.forFeature([NationalState])
  ]
})
export class NationalModule {}
