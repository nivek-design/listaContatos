import { TodosContatos } from './../models/TodosContatos.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-contato',
  templateUrl: './dados-contato.page.html',
  styleUrls: ['./dados-contato.page.scss'],
})
export class DadosContatoPage implements OnInit {

  contatoInfo: TodosContatos;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.contatoInfo = this.dadosService.pegarDados('contatoInfo');
    console.log('contatoInfo enviado', this.contatoInfo);
  }

}
