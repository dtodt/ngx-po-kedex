import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PokemonListModule } from '@app/components/pokemon-list/pokemon-list.module';

import { NationalRoutingModule } from './national-routing.module';
import { NationalComponent } from './national.component';

import { NationalState } from './state/national.state';

@NgModule({
  declarations: [NationalComponent],
  imports: [
    CommonModule,
    NationalRoutingModule,
    NgxsModule.forFeature([NationalState]),
    FlexLayoutModule,
    ButtonsModule.forRoot(),
    MatToolbarModule,
    PokemonListModule
  ]
})
export class NationalModule {}
