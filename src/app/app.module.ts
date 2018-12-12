import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DenunciaProvider } from '../providers/denuncia/denuncia';

import { Camera } from '@ionic-native/camera'
import { HttpModule } from '@angular/http';
import { ListDenunciaPage } from '../pages/list-denuncia/list-denuncia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListDenunciaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListDenunciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DenunciaProvider, 
    Camera
  ]
})
export class AppModule {}
