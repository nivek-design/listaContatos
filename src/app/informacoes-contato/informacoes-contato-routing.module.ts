import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacoesContatoPage } from './informacoes-contato.page';

const routes: Routes = [
  {
    path: '',
    component: InformacoesContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacoesContatoPageRoutingModule {}
