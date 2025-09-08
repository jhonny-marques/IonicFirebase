import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsDetailPageRoutingModule } from './pets-detail-routing.module';

import { PetsDetailPage } from './pets-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsDetailPageRoutingModule
  ],
  declarations: [PetsDetailPage]
})
export class PetsDetailPageModule {}
