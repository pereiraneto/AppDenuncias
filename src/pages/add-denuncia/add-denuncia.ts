import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { transition } from '@angular/core/src/animation/dsl';
import { Denuncia } from '../../models/denuncia';
import { Imagem } from '../../models/imagem';
import { DenunciaProvider } from '../../providers/denuncia/denuncia';
import { HomePage } from '../home/home';
// import { ListDenunciaPage } from '../list-denuncia/list-denuncia';

@IonicPage()
@Component({
  selector: 'page-add-denuncia',
  templateUrl: 'add-denuncia.html',
})
export class AddDenunciaPage {

  email: string;
  imagem: string = '';
  denuncia = {} as Denuncia;
  imagemJSON = {} as Imagem;

  constructor(public navCtrl: NavController, 
            private camera: Camera, 
            private denunciaService: DenunciaProvider,
            private toast: ToastController) {
    this.email = "pereira.neto.12@gmail.com";
  }

  takePicture(){
    this.imagem = '';
 
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.imagem = base64image;
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
      console.log(this.imagem);
      
  }

  cadastrarDenuncia(){
    let data = new Date();
    let tempo = data.toLocaleString();
    this.imagemJSON.dataImage = tempo;
    this.imagemJSON.imagem = this.imagem;
    this.denuncia.email = this.email;
    this.denuncia.imagem = this.imagemJSON;
    this.denunciaService.addDenuncias(this.denuncia);
    const toast = this.toast.create({
      message: 'Denúncia Cadastrada !!',
      duration: 3000
    });
    toast.present();
    this.navCtrl.setRoot(HomePage);
  }

}
