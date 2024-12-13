import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { HomePage } from '../home/home.page';
import { ToastController } from '@ionic/angular';
import { asistencia } from '../model/asistencia';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  alumnos: Alumno[] = [
    new Alumno(1, 'axel', '123'),
    new Alumno(2, 'kevin', '123')
  ];

  constructor() { }

  private autenticacion =false;


  validateLogin(alumno: string, password: string): boolean {
    const found = this.alumnos.find(Alumno => Alumno.alumno === alumno);
  
    if (found && found.password === password) {
      // Guardar alumno autenticado
      localStorage.setItem('alumnoAutenticado', JSON.stringify(found));
      console.log('Alumno autenticado y almacenado:', found);
      return true;
    } else {
      // Eliminar datos si el login falla
      localStorage.removeItem('alumnoAutenticado');
      console.log('Login fallido.');
      return false;
    }
  }
  
   // Método para obtener el alumno autenticado desde el localStorage
   getAlumnoAutenticado(): Alumno | null {
    const alumno = JSON.parse(localStorage.getItem('alumnoAutenticado') || '{}');
    return alumno ? alumno : null;
  }
  

   // Nueva función para buscar el usuario
   findAlumno(alumno: string): Alumno | undefined {
    return this.alumnos.find(Alumno => Alumno.alumno === alumno);
  }
  
   // Método para autenticar al alumno (esto es solo un ejemplo)
   authenticateAlumno(id: number, username: string) {
    const alumno = new Alumno(id, username, '');  // Asumimos que la contraseña no se guarda por razones de seguridad
    localStorage.setItem('alumnoAutenticado', JSON.stringify(alumno));
  }


  //LOGOUT 
  logout(): void {
    // Eliminar el estado de autenticación
    localStorage.removeItem('alumnoAutenticado');
    console.log('Sesión cerrada.');
  }

  guardarAsistencia(asistencia: { alumno: string; asignatura: string; asistencia: number }) {
    let asistencias = JSON.parse(localStorage.getItem('asistencias') || '[]');
  
    // Buscar si ya existe una entrada para este alumno y asignatura
    const index = asistencias.findIndex(
      (a: any) => a.alumno === asistencia.alumno && a.asignatura === asistencia.asignatura
    );
  
    if (index >= 0) {
      // Actualizar asistencia existente
      asistencias[index].asistencia = asistencia.asistencia;
    } else {
      // Agregar nueva entrada
      asistencias.push(asistencia);
    }
  
    // Guardar en localStorage
    localStorage.setItem('asistencias', JSON.stringify(asistencias));
  }
  
  obtenerAsistencias(): any[] {
    return JSON.parse(localStorage.getItem('asistencias') || '[]');
}
}