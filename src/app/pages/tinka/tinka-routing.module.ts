import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinkaPage } from './tinka.page';

const routes: Routes = [
  {
    path: '',
    component: TinkaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinkaPageRoutingModule {}
