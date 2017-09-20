import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valorEmReais = 0.0;
  valorEmDolares = 0.0;
  valorEmEuros = 0.0;
  valorEmLibras = 0.0;

  taxaDolar = 0;
  taxaEuro = 0;
  taxaLibra = 0;

  constructor(public navCtrl: NavController, public auth: AuthServiceProvider) {

    auth.getCotacoes().then(cotacoes => {
      this.taxaDolar = cotacoes['USD'];
      this.taxaEuro = cotacoes['EUR'];
      this.taxaLibra = cotacoes['GBP'];
    });
  }

  converter() {
    this.valorEmDolares = this.valorEmReais * this.taxaDolar;
    this.valorEmEuros = this.valorEmReais * this.taxaEuro;
    this.valorEmLibras = this.valorEmReais * this.taxaLibra;
  }

}

