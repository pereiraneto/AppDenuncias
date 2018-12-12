import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDenunciaPage } from './add-denuncia';

@NgModule({
  declarations: [
    AddDenunciaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDenunciaPage),
  ],
})
export class AddDenunciaPageModule {}
