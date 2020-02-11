import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HeaderModule } from '@app/components/header/header.module';
import { PokemonPortraitModule } from '@app/components/pokemon-portrait/pokemon-portrait.module';
import { PokemonTitleModule } from '@app/components/pokemon-title/pokemon-title.module';

import { PokemonDetailsState } from './state/pokemon-details.state';

import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import { PokemonDetailsComponent } from './pokemon-details.component';

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [
    FormsModule,
    CommonModule,
    HeaderModule,
    FlexLayoutModule,
    PokemonTitleModule,
    PokemonPortraitModule,
    ButtonsModule.forRoot(),
    PokemonDetailsRoutingModule,
    NgxsModule.forFeature([PokemonDetailsState])
  ]
})
export class PokemonDetailsModule {}
