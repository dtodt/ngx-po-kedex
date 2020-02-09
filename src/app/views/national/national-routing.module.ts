import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationalComponent } from './national.component';

const routes: Routes = [{ path: '', component: NationalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NationalRoutingModule {}
