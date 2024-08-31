import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesPaisPage } from './detalhes-pais.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesPaisPageRoutingModule {}
