import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KabalaPageRoutingModule } from './kabala-routing.module';

import { KabalaPage } from './kabala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KabalaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [KabalaPage]
})
export class KabalaPageModule {}
