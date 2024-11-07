import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {
  imageUrl: string = '';


  constructor() { }

  ngOnInit() { }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    this.imageUrl = image.webPath || '';
  }


}