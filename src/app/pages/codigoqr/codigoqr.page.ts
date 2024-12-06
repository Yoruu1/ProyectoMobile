import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { ModalController, ToastController,Platform } from '@ionic/angular';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {

  scanResult = ''

  constructor(
    private modalControler: ModalController,
    private platform : Platform
  ) { }

  ngOnInit(): void {
    if(this.platform.is('capacitor')){
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners().then();
    }
}

async startScan() {
  const modal = await this.modalControler.create({
  component: BarcodeScanningModalComponent,
  cssClass: 'barcode-scanning-modal',
  showBackdrop: false,
  componentProps: {  
    formats : [],
    LensFacing : LensFacing.Back,

  }
  });

  await modal.present();

  const {data} = await modal.onWillDismiss();
  if (data) {
    this.scanResult = data?.barcode?.displayValue
  }
}

}