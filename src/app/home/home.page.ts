import { Component } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alumno : string;
  password : string;
  message: string;

  constructor(
    private toastController: ToastController,
    private router: Router,
    private  loginService: LoginService
  ) {
    this.alumno =''
    this.password =''
    this.message ='Logo exitoso'
  }
  async validateLogin(){
    if(this.loginService.validateLogin(this.alumno,this.password)){
      const NavigationExtras:NavigationExtras = {
        state:{
          alumno: this.alumno
        }
      }
      this.router.navigate(['/alumno'],NavigationExtras);
    }else { const toast = await this.toastController.create({
      message: 'Credenciales incorrectas.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();

    }
  }

  irrecuperarContrasena(){
    this.router.navigate(['/recuperar-contrasena'])
  }

  
  
}
