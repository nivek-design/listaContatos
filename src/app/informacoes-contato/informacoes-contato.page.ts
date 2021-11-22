import { TodosContatos } from './../models/TodosContatos.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-informacoes-contato',
  templateUrl: './informacoes-contato.page.html',
  styleUrls: ['./informacoes-contato.page.scss'],
})
export class InformacoesContatoPage  {

  contato = 'Contatos';

  listaContatos: TodosContatos[]=[
    {
      nome: 'Kevin',
      sobrenome: 'Araujo',
      celular: 43984021307,
      // eslint-disable-next-line max-len
      foto: 'https://scontent.fumu2-2.fna.fbcdn.net/v/t1.6435-9/49274263_2106440106108826_2590806147908763648_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFXiqliyTvXZ2I1z3CEEL-YMDFlaKe0It4wMWVop7Qi3liLOYI-B0UekWaOsCfxq4kGvXRQnbxYpn3MdXFL40Sl&_nc_ohc=v6AyKtVK2gcAX9m--nK&_nc_ht=scontent.fumu2-2.fna&oh=da60eaa1f57dbc2a21ad87bf1f590fcc&oe=61BA7A6B',
      informacoes: 'moro em londrina paraná, tenho 27 anos, estudo Analise e desenvolvimento de sistemas',
      pagina: '/informacoes-contato',
      email: 'nivekdesign@outlook.com'

    }

    ];

  constructor(public alertController: AlertController,public toastController: ToastController) { }



}
