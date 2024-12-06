import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMovilPage } from './app-movil.page';

const routes: Routes = [
  {
    path: '',
    component: AppMovilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMovilPageRoutingModule {}
