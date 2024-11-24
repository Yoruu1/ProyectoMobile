import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ingresadoGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuarioAutenticado = localStorage.getItem('alumnoAutenticado');
    if (!usuarioAutenticado) {
      this.router.navigate(['/home']); // Redirige al login si no está autenticado
      return false;
    }
    return true; // Permite el acceso a páginas protegidas
  }
}
