import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  alumnos : Alumno [] = [
    new Alumno('axel','123'),
    new Alumno('kevin','123'),
    new Alumno('mati','123')
  ]

  constructor() { }

  private autenticacion =false;

  validateLogin(alumno:string, password:string): boolean {
    const found = this.alumnos.find(Alumno=> Alumno.alumno === alumno);
    if(found !== undefined){
      this.autenticacion=true
      return found.password === password;
    }else {
      this.autenticacion= false;
    } return false
  } 

  
  alumnoAutenticado (): boolean {
    return this.autenticacion;
  }


   // Nueva función para buscar el usuario
   findAlumno(alumno: string): Alumno | undefined {
    return this.alumnos.find(Alumno => Alumno.alumno === alumno);
  }
}
