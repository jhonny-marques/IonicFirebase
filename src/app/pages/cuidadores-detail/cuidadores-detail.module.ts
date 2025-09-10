import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadoresDetailPageRoutingModule } from './cuidadores-detail-routing.module';

import { CuidadoresDetailPage } from './cuidadores-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadoresDetailPageRoutingModule
  ],
  declarations: [CuidadoresDetailPage]
})
export class CuidadoresDetailPageModule {}
