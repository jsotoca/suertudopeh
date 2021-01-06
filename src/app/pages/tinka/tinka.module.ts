import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinkaPageRoutingModule } from './tinka-routing.module';

import { TinkaPage } from './tinka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinkaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TinkaPage]
})
export class TinkaPageModule {}
