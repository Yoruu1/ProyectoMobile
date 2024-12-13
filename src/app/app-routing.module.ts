import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noIngresadoGuard } from './guards/no-ingresado.guard';
import { ingresadoGuard } from './guards/ingresado.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate : [noIngresadoGuard]

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate : [ingresadoGuard]

  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./pages/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  
  
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)

  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule),
    canActivate : [ingresadoGuard]

  },
  {
    path: 'ingles',
    loadChildren: () => import('./pages/asignaturas/ingles/ingles.module').then( m => m.InglesPageModule)
  },
  {
    path: 'matematicas',
    loadChildren: () => import('./pages/asignaturas/matematicas/matematicas.module').then( m => m.MatematicasPageModule)
  },
  {
    path: 'app-movil',
    loadChildren: () => import('./pages/asignaturas/app-movil/app-movil.module').then( m => m.AppMovilPageModule)
  },  {
    path: 'profesor',
    loadChildren: () => import('./pages/profesor/profesor.module').then( m => m.ProfesorPageModule)
  }








];
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
