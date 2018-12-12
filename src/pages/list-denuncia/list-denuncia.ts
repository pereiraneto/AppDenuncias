import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DenunciaProvider } from '../../providers/denuncia/denuncia';
import { Denuncia } from '../../models/denuncia';

@IonicPage({
  name: 'list-denuncia'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list-denuncia.html'
})
export class ListDenunciaPage {

  denuncias: Denuncia[];

  constructor(public navCtrl: NavController, private denunciaService: DenunciaProvider) {
    this.denunciaService.getDenuncias()
    .subscribe(
      data=>{
        this.denuncias = data;
      },
      error=>{
        console.log(error);
      }
    );
  }   
}
