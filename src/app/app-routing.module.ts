import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/national', pathMatch: 'full' },
  {
    path: 'national',
    loadChildren: () =>
      import('./national/national.module').then(m => m.NationalModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
