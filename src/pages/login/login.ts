import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthServiceProvider, public menuCtrl: MenuController) {
  }

  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false, 'myMenu');
  }
  
  login() {
    this.auth.entrarComFacebook();
    this.navCtrl.push(HomePage);
  }

}
