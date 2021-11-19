import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController,public toastController: ToastController) {}

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
            this.presentToastDeletado();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToastDeletado() {
    const toast = await this.toastController.create({
      message: 'Deletado com sucesso!',
      duration: 2000,
      color: 'danger',
      position: "top"
    });
    toast.present();
  }

}
