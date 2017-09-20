
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http'
import { LoginPage } from '../pages/login/login';
import { SobrePage } from '../pages/sobre/sobre';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDi874XmsQOt5fsjaHAlUuLE87ii5RNNmg",
  authDomain: "aula01-264cb.firebaseapp.com",
  databaseURL: "https://aula01-264cb.firebaseio.com",
  projectId: "aula01-264cb",
  storageBucket: "aula01-264cb.appspot.com",
  messagingSenderId: "557885983794"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhcWC7wKCDpDyPUyO4xQ_4C3vs_aA-UBU'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
  ]
})
export class AppModule { }