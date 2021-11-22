import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoContatoPageRoutingModule } from './novo-contato-routing.module';

import { NovoContatoPage } from './novo-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoContatoPageRoutingModule
  ],
  declarations: [NovoContatoPage]
})
export class NovoContatoPageModule {}
