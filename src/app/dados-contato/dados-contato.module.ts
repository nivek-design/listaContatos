import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosContatoPageRoutingModule } from './dados-contato-routing.module';

import { DadosContatoPage } from './dados-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosContatoPageRoutingModule
  ],
  declarations: [DadosContatoPage]
})
export class DadosContatoPageModule {}
