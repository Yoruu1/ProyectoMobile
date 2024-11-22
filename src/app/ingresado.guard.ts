import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const ingresadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inyectar el Router


  
  if(localStorage.getItem('alumnoAutenticado')){
    return true; //permite acceso
  }else{
    // Redirigir al usuario si no está autenticado
    return false
  }
};
