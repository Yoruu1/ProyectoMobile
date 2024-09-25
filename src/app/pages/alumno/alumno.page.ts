import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  alumno : string = '';
  constructor(private router: Router) {
    const navigation= this.router.getCurrentNavigation();
    if(navigation?.extras.state){
      this.alumno=navigation.extras.state ['alumno']
    }
  }
  ngOnInit() {
  }
  irgenerarQr(){
    this.router.navigate(['/codigoqr'])
  }
}
