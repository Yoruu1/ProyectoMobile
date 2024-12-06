import { Component, OnInit } from '@angular/core';
import { ScannerService } from 'src/app/service/scanner.service';
import { LoginService } from 'src/app/service/login.service';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { Router } from '@angular/router';
@Component({
selector: 'app-ingles',
templateUrl: './ingles.page.html',
styleUrls: ['./ingles.page.scss'],
})
export class InglesPage implements OnInit {
    asistenciaActual: number = 0; // Número de asistencias actuales
    asistenciaMaxima: number = 7; // Límite de asistencias
  
    constructor(
      private scannerService: ScannerService,
      private loginService: LoginService,
      private router: Router
    ) {}
  
    ngOnInit() {
      // Cargar las asistencias del alumno autenticado al iniciar la vista
      const alumnoAutenticado = this.loginService.getAlumnoAutenticado();
      if (alumnoAutenticado) {
        const asistencias = this.loginService.obtenerAsistencias();
        const asistenciaAlumno = asistencias.find(
          (a) => a.alumno === alumnoAutenticado.alumno && a.asignatura === 'Inglés'
        );
        this.asistenciaActual = asistenciaAlumno ? asistenciaAlumno.asistencia : 0;
      }
    }
  
    async startScan() {
      if (this.asistenciaActual >= this.asistenciaMaxima) {
        alert('¡Has alcanzado el límite de asistencias! Reiniciando contador...');
        this.reiniciarAsistencia();
        return;
      }
    
      // Iniciar el escaneo
      await this.scannerService.startScan();
    
      // Validar el resultado del escaneo
      const scanResult = this.scannerService.scanResult;
      if (!scanResult) {
        alert('Escaneo cancelado o sin resultado. No se registró asistencia.');
        return;
      }
    
      const alumnoAutenticado = this.loginService.getAlumnoAutenticado();
      if (alumnoAutenticado) {
        const nuevaAsistencia = {
          alumno: alumnoAutenticado.alumno,
          asignatura: 'Inglés',
          asistencia: this.asistenciaActual + 1, // Incrementar asistencia
        };
    
        this.loginService.guardarAsistencia(nuevaAsistencia);
    
        // Incrementar asistencia y actualizar la vista
        this.asistenciaActual++;
        alert(`¡Asistencia registrada con éxito! Total: ${this.asistenciaActual}`);
      } else {
        alert('Error: No se pudo registrar la asistencia.');
      }
    }


    reiniciarAsistencia() {
        // Reiniciar asistencia actual
        this.asistenciaActual = 0;
    
        const alumnoAutenticado = this.loginService.getAlumnoAutenticado();
        if (alumnoAutenticado) {
          const nuevaAsistencia = {
            alumno: alumnoAutenticado.alumno,
            asignatura: 'Inglés',
            asistencia: 0,
          };
          this.loginService.guardarAsistencia(nuevaAsistencia);
        }
    
        alert('¡El contador de asistencias ha sido reiniciado!');
      }
    
  
volver(){
this.router.navigate(['/asignaturas'])
}
} 