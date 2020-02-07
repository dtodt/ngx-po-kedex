import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationalRoutingModule } from './national-routing.module';
import { NationalComponent } from './national.component';

@NgModule({
  declarations: [NationalComponent],
  imports: [CommonModule, NationalRoutingModule]
})
export class NationalModule {}
