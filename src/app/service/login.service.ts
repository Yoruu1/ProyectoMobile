import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { HomePage } from '../home/home.page';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  alumnos : Alumno [] = [
    new Alumno('axel','123'),
    new Alumno('kevin','123')
    ]

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
  
  getAlumnoAutenticado(): Alumno | null {
    const alumno = localStorage.getItem('alumnoAutenticado');
    if (alumno) {
      return JSON.parse(alumno); // Convertir a un objeto
    }
    return null; // Si no hay datos, devolver null
  }
  

   // Nueva función para buscar el usuario
   findAlumno(alumno: string): Alumno | undefined {
    return this.alumnos.find(Alumno => Alumno.alumno === alumno);
  }


  //LOGOUT 
  logout(): void {
    // Eliminar el estado de autenticación
    localStorage.removeItem('alumnoAutenticado');
    console.log('Sesión cerrada.');
  }
 
}
