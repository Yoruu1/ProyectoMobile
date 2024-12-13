import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode'; 
import { Alumno } from 'src/app/model/alumno';
import { AsistenciaService } from 'src/app/service/asistencia';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  asignaturas = ['Inglés', 'Matemáticas', 'Programación Móvil']; // Lista de asignaturas disponibles
  selectedSubject: string = '';
  qrCode: string = '';
  selectedDate: string = '';
  asistencias: any[] = [];
  selectedStudentName: string = ''; // Nombre del alumno

  ngOnInit(): void {
      
  }

  constructor(private asistenciaService: AsistenciaService) { }
   // Captura el cambio en la fecha seleccionada
   onDateChange(event: any) {
    this.selectedDate = event.detail.value; // Formato ISO 8601
  }

  verAsistencias() {
    // Llamamos al método con los tres parámetros: materia, fecha y nombre del alumno
  this.asistencias = this.asistenciaService.getAsistenciasPorMateriaYFechaYNombre(
    this.selectedSubject, 
    this.selectedDate, 
    this.selectedStudentName
  );
  console.log(this.asistencias);  // Verifica si se actualiza correctamente
  }
  
  
  
    async generateQRCode() {
    if (this.selectedStudentName || !this.selectedSubject || !this.selectedDate) {
      alert('Por favor, selecciona una asignatura y una fecha.');
      return;
    }

    const qrData = {
      materia: this.selectedSubject,
      fecha: this.selectedDate,
      alumno: this.selectedStudentName
    };

    try {
      this.qrCode = await QRCode.toDataURL(JSON.stringify(qrData));
      alert('¡QR generado exitosamente!');
        // Guardar la nueva asistencia en el servicio
        this.asistenciaService.agregarAsistencia(this.selectedStudentName,this.selectedSubject, this.selectedDate);
    } catch (error) {
      console.error('Error al generar el QR:', error);
      alert('Ocurrió un error al generar el código QR.');
    }
  }
  
}



