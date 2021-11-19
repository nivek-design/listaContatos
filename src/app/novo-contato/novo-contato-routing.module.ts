import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoContatoPage } from './novo-contato.page';


const routes: Routes = [
  {
    path: '',
    component: NovoContatoPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoContatoPageRoutingModule {}
