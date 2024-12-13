import { Injectable } from '@angular/core';
import { BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { ModalController, ToastController,Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { asistencia } from '../model/asistencia';
import { AsistenciaService } from './asistencia';  // Asegúrate de que AsistenciaService esté importado
import { LoginService } from './login.service';  // Asegúrate de importar LoginService

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  scanResult = ''

  constructor(
    private modalControler: ModalController,
    private platform : Platform,
    private asistenciaService: AsistenciaService, // Inyectamos el servicio de asistencia,
    private loginService: LoginService // Inyectamos LoginService


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
  });

  await modal.present();

  const { data } = await modal.onWillDismiss();
  if (data) {
    const qrData = JSON.parse(data?.barcode?.displayValue);

    if (qrData.materia && qrData.fecha) {
      this.asistenciaService.registerAttendance(qrData.materia, qrData.fecha); // Registrar la asistencia
    } else {
      alert('QR inválido');
    }
  }
}

registerAttendance(materia: string, fecha: string) {
  // Obtener el alumno autenticado desde el LoginService
  const alumnoAutenticado = this.loginService.getAlumnoAutenticado();

  if (!alumnoAutenticado) {
    alert('El alumno no está autenticado.');
    return;
  }

  // Crear el registro de asistencia
  const asistencia = {
    alumnoId: alumnoAutenticado.id,
    materia,
    fecha,
    estado: true, // Asistencia "presente"
  };

  // Guardar la asistencia en localStorage
  const storedAsistencias = localStorage.getItem('asistencias');
  let asistencias = storedAsistencias ? JSON.parse(storedAsistencias) : [];
  asistencias.push(asistencia);
  localStorage.setItem('asistencias', JSON.stringify(asistencias));

  alert(`¡Asistencia registrada en ${materia} para el día ${fecha}!`);
}
}
