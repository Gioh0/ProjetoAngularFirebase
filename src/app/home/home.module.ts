import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { BannerModule } from '../shared/components/banner/banner.module';
import { TreinosModule } from '../shared/components/treinos/treinos.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    BannerModule,
    TreinosModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  
}
