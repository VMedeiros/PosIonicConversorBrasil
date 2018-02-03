import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import {MapPage} from "../pages/map/map";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  [x: string]: any;

  @ViewChild(Nav) nav: Nav;
  
    rootPage: any = LoginPage;
  
    pages: Array<{title: string, component: any}>;

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Conversor', component: HomePage },
        { title: 'Casas de Câmbio', component: MapPage },
      { title: 'Sobre', component: SobrePage },
      { title: 'Sair', component: LoginPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#FFF111');
      this.splashScreen.hide();
    });
  }

  homePage() {
    this.nav.push(HomePage);
  }

  mapPage() {
    this.nav.push(MapPage);
  }

  sobrePage() {
    this.nav.push(SobrePage);
  }

  loginPage() {
    this.nav.push(LoginPage);
  }
}
