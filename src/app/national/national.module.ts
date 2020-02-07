import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { NationalRoutingModule } from './national-routing.module';
import { NationalComponent } from './national.component';

import { NationalState } from './state/national.state';

@NgModule({
  declarations: [NationalComponent],
  imports: [
    CommonModule,
    NationalRoutingModule,
    NgxsModule.forFeature([NationalState])
  ]
})
export class NationalModule {}
