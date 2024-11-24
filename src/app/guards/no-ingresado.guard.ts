import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class noIngresadoGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuarioAutenticado = localStorage.getItem('alumnoAutenticado');
    if (usuarioAutenticado) {
      this.router.navigate(['/alumno']); // Redirige directamente al área de alumnos
      return false; // Bloquea el acceso a 'home'
    }
    return true; // Permite el acceso a 'home'
  }
}
