import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesContatoPageRoutingModule } from './informacoes-contato-routing.module';

import { InformacoesContatoPage } from './informacoes-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesContatoPageRoutingModule
  ],
  declarations: [InformacoesContatoPage]
})
export class InformacoesContatoPageModule {}
