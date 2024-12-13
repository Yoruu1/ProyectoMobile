import { Injectable } from '@angular/core';
import { asistencia } from '../model/asistencia';
import { LoginService } from './login.service';
@Injectable({
    providedIn: 'root'
  })
export class AsistenciaService {

  private asistencias: any[] = []; // Lista de asistencias vacía, que se llenará dinámicamente

  constructor(private loginService: LoginService) { }
// Método para agregar una nueva asistencia
agregarAsistencia(nombre:string, materia: string, fecha: string) {
  const nuevaAsistencia = {
    nombre: nombre,
    materia: materia,
    fecha: fecha,
  };
  this.asistencias.push(nuevaAsistencia);
}


 // Método para obtener las asistencias de acuerdo a la materia y fecha
 getAsistenciasPorMateriaYFechaYNombre(materia: string, fecha: string, nombre : string) {
  return this.asistencias.filter(asistencia =>
    asistencia.materia === materia && asistencia.fecha === fecha && asistencia.nombre === nombre
  );
}

     // Registrar la asistencia cuando un alumno escanea el QR
  registerAttendance(materia: string, fecha: string) {
    const alumnoAutenticado = this.loginService.getAlumnoAutenticado();

    if (!alumnoAutenticado) {
      alert('El alumno no está autenticado.');
      return;
    }
  
     // Crear el registro de asistencia
    const asistencia: asistencia = {
      alumnoId: alumnoAutenticado.id,
      nombre: alumnoAutenticado.alumno, // Nombre del alumno
      materia,
      fecha,
      estado: true, // Asistencia "presente"
    };

    // Obtener las asistencias previas y agregar la nueva
    const storedAsistencias = localStorage.getItem('asistencias');
    let asistencias = storedAsistencias ? JSON.parse(storedAsistencias) : [];
    asistencias.push(asistencia);

    // Guardar las asistencias en localStorage
    localStorage.setItem('asistencias', JSON.stringify(asistencias));

    alert(`¡Asistencia registrada en ${materia} para el día ${fecha}!`);
  }

  // Obtener la lista de asistencias para que el profesor las vea
  getAsistencias(): asistencia[] {
    const storedAsistencias = localStorage.getItem('asistencias');
    return storedAsistencias ? JSON.parse(storedAsistencias) : [];
  
  }
}
