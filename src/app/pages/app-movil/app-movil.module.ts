import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMovilPageRoutingModule } from './app-movil-routing.module';

import { AppMovilPage } from './app-movil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMovilPageRoutingModule
  ],
  declarations: [AppMovilPage]
})
export class AppMovilPageModule {}
