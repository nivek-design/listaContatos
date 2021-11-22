import { TodosContatos } from './../models/TodosContatos.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


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
      informacoes: '',
      email: 'nivekdesign@outlook.com',
      pagina: '/informacoes-contato'

    },
    {
      nome: 'Laura',
      sobrenome: 'Rossini',
      celular: 43998726322,
      // eslint-disable-next-line max-len
      foto: 'https://scontent.fumu2-1.fna.fbcdn.net/v/t39.30808-6/252454572_1561425774198283_1033479301828369871_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEeJf-6wtiu0PdIbrl1sLUi_Ld7MCPrNCb8t3swI-s0JrI-g-FjZejSdtheKTy17GbOfSP-PG3kFgkUYhwzEu-p&_nc_ohc=SyKGzZa5dhIAX9JLCna&_nc_ht=scontent.fumu2-1.fna&oh=02d6692d3a1aac226754331c5111f9c0&oe=619E5D11',
      informacoes: '?',
      email: '',
      pagina: '/informacoes-contato',
      pagina2:'/novo-contato'

    }


    ];


  constructor(public alertController: AlertController,public toastController: ToastController, private router: Router ) {}

  navigate(){
    this.router.navigate(['/novo-contato']);
  }

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
