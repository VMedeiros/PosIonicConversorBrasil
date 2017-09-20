import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API_URL = 'http://api.fixer.io/latest?base=BRL';

@Injectable()
export class AuthServiceProvider {
private usuario: firebase.User;

  constructor(public auth: AngularFireAuth, private http: Http) {
    auth.authState.subscribe((user: firebase.User) =>this.usuario = user);
  }

  getCotacoes() {
    return this.http.get(API_URL).toPromise()
      .then(response => {
        return response.json().rates;
      }).catch(erro => {
        return { erro: 'Ocorreu um erro' };
      });
  }

  get autenticado(): boolean {
    return this.usuario !== null;
  }
  entrarComFacebook(): firebase.Promise<any> {
    return this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  sair(): void{
    this.auth.auth.signOut();
  }

  get nomeUsuario() : string {
    return this.usuario ? this.usuario.displayName : '';
  }
}
