import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanaDiarioPage } from './gana-diario.page';

const routes: Routes = [
  {
    path: '',
    component: GanaDiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanaDiarioPageRoutingModule {}
