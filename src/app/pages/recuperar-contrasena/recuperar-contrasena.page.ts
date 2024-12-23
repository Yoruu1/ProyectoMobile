import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
  alumno: string ='';
  newPassword : string ='';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
  }
  
 async recuperarContrasena() {
  const user = this.loginService.findAlumno(this.alumno);
  if(user){
    user.password = this.newPassword;
    this.router.navigate(['/home']);
  }else{
  
  }
}


async toast (message: string, duration: number = 2000, color: string = 'primary') {
  const toast = await this.toastController.create({
    message: message,
    duration: duration,
    color: color,
    position: 'bottom', // Cambia a 'top' o 'middle' según prefieras
  });
  await toast.present();
}
}