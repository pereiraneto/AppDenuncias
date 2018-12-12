import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListDenunciaPage } from '../list-denuncia/list-denuncia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irListDenuncia(){
    this.navCtrl.push(ListDenunciaPage);
  }

}
