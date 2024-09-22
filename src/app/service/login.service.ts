import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  alumnos : Alumno [] = [
    new Alumno('axel','123')
  ]

  constructor() { }
  //Pimer paso: Encontrar a los usuarios
  validateLogin(alumno:string, password: string):boolean {
    const found= this.alumnos.find(Alumno=> Alumno.alumno === alumno);
    if(found !== undefined ){
      return found.password === password;
    } return false;
  }
}
