import { TodosContatos } from './../models/TodosContatos.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contato = 'Contatos';

  listaContatos: TodosContatos[]=[
    {
      nome: 'Kevin',
      sobrenome: 'Araujo',
      celular: 43984021307,
      // eslint-disable-next-line max-len
      foto: 'https://scontent.fumu2-2.fna.fbcdn.net/v/t1.6435-9/49274263_2106440106108826_2590806147908763648_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFXiqliyTvXZ2I1z3CEEL-YMDFlaKe0It4wMWVop7Qi3liLOYI-B0UekWaOsCfxq4kGvXRQnbxYpn3MdXFL40Sl&_nc_ohc=v6AyKtVK2gcAX9m--nK&_nc_ht=scontent.fumu2-2.fna&oh=da60eaa1f57dbc2a21ad87bf1f590fcc&oe=61BA7A6B',
      informacoes: 'moro em londrina paraná ',
      email: 'nivekdesign@outlook.com',
      pagina: '/informacoes-contato'

    },
    {
      nome: 'Laura',
      sobrenome: 'Rossini',
      celular: 43998726322,
      foto: '',
      informacoes: '?',
      email: '',
      pagina: '/informacoes-contato',
      pagina2:'/novo-contato'

    }


    ];







  constructor(public alertController: AlertController,public toastController: ToastController,) {}

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
      color: 'verdefluorescente',
      position: 'bottom',
    });
    toast.present();
  }

}
