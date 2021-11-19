import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController,) {}

  async deleteContato() {
    const alert = await this.alertController.create({
      header: 'Deletar',
      message: 'Deseja realmente deletar o contato?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, Deletar',
          handler: () => {
            console.log('Deletado');
          }
        }
      ]
    });

    await alert.present();
  }

}
