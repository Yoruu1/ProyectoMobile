import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { ScannerService } from 'src/app/service/scanner.service';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  alumno : string = '';
  constructor(private router: Router,
    private loginService: LoginService,
    private scannerService: ScannerService
  ) {
      // Obtener el nombre del usuario autenticado
    const usuarioAutenticado = this.loginService.getAlumnoAutenticado();
    if (usuarioAutenticado) {
      this.alumno = usuarioAutenticado.alumno; // Asignar el nombre a la variable
    } else {
      // Si no hay usuario autenticado, redirigir al login
      this.router.navigate(['/home']);
    }
  }

  scanQRCode() {
    this.scannerService.startScan();
  }

  ngOnInit() {
  }
  irgenerarQr(){
    this.router.navigate(['/codigoqr'])
  }

  //LOGOUT 
  logout() {
    this.loginService.logout(); // Lógica de logout
    this.router.navigate(['/home']); // Redirigir al login
  }

  asignaturass() {
    // Lógica del método
    this.router.navigate(['asignaturas'])
  }
}
