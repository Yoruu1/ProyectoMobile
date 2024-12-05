import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iringles(){
    this.router.navigate(['ingles']);
}

irmatematicas(){
  this.router.navigate(['matematicas'])
}

irapp_movil() {
  this.router.navigate(['app_movil'])
}

}
