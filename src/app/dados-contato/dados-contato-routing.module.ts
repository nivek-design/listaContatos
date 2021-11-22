import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosContatoPage } from './dados-contato.page';

const routes: Routes = [
  {
    path: '',
    component: DadosContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosContatoPageRoutingModule {}
