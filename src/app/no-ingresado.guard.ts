import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const noIngresadoGuard: CanActivateFn = (route, state) => {
  
  
  const router = inject(Router); // Inyectar el Router
  
  if(localStorage.getItem('alumnoAutenticado')){
    return router.parseUrl('/home');
  }else{
    // Redirigir al usuario si no está autenticado
    return true
  }


};
