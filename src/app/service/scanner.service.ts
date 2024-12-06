import { Injectable } from '@angular/core';
import { BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { ModalController, ToastController,Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
@Injectable({
  providedIn: 'root'
})
export class ScannerService {

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
      formats: [],
      LensFacing: LensFacing.Back,
    },
  });

  await modal.present();

  const { data } = await modal.onWillDismiss();

  // Validar si el escaneo fue exitoso
  if (data?.barcode?.displayValue) {
    this.scanResult = data.barcode.displayValue;
  } else {
    this.scanResult = ''; // Resetear si el escaneo fue cancelado
  }
}}
