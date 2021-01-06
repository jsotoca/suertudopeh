import { LuckComponent } from './shared/luck/luck.component';
import { TableroComponent } from './shared/tablero/tablero.component';
import { HeaderComponent } from './shared/header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
   HeaderComponent, TableroComponent, LuckComponent 
  ],
  exports: [
    HeaderComponent, TableroComponent, LuckComponent 
   ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
