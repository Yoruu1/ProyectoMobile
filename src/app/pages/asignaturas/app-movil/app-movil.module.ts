import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMovilPageRoutingModule } from './app-movil-routing.module';

import { AppMovilPage } from './app-movil.page';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMovilPageRoutingModule
  ],
  declarations: [AppMovilPage,BarcodeScanningModalComponent]
})
export class AppMovilPageModule {}
