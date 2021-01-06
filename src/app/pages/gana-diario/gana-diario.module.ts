import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanaDiarioPageRoutingModule } from './gana-diario-routing.module';

import { GanaDiarioPage } from './gana-diario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanaDiarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GanaDiarioPage]
})
export class GanaDiarioPageModule {}
