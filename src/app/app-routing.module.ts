import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthComponent } from './guards/no-auth/no-auth.component';
import { verificarGuard } from './guards/verificar.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [verificarGuard]
  
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./pages/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  
  {
    path: 'codigoqr',
    loadChildren: () => import('./pages/codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule),
    canActivate: [verificarGuard]
  
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'no-auth',
    component: NoAuthComponent
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
