import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, FlexLayoutModule, NotFoundRoutingModule]
})
export class NotFoundModule {}
