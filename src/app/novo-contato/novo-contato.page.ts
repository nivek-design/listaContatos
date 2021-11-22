import { TodosContatos } from './../models/TodosContatos.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.page.html',
  styleUrls: ['./novo-contato.page.scss'],
})
export class NovoContatoPage  {

  constructor(public alertController: AlertController,public toastController: ToastController) { }



}
