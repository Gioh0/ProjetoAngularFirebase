import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPaisPageRoutingModule } from './detalhes-pais-routing.module';

import { DetalhesPaisPage } from './detalhes-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPaisPageRoutingModule
  ],
  declarations: [DetalhesPaisPage]
})
export class DetalhesPaisPageModule {}
