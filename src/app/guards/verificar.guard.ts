import { CanActivateFn } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { inject, Inject } from '@angular/core';


export const verificarGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router)

  if(loginService.alumnoAutenticado()){
    return true
  }else{
    router.navigate(['no-auth'])

    return false;
  }


};
