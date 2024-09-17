import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinosComponent } from './treinos.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TreinosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    TreinosComponent
  ]
})
export class TreinosModule { }
