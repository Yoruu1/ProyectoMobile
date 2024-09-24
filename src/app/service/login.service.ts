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

  validateLogin(alumno:string, password:string): boolean {
    const found = this.alumnos.find(Alumno=> Alumno.alumno === alumno);
    if(found !== undefined){
      return found.password === password;
    }else {
    } return false
  } 
   // Nueva función para buscar el usuario
   findAlumno(alumno: string): Alumno | undefined {
    return this.alumnos.find(Alumno => Alumno.alumno === alumno);
  }
}
