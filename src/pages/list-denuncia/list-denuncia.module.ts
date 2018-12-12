import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDenunciaPage } from './list-denuncia';

@NgModule({
  declarations: [
    ListDenunciaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDenunciaPage),
  ],
})
export class ListDenunciaPageModule {}
