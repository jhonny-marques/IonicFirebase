import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadoresListPageRoutingModule } from './cuidadores-list-routing.module';

import { CuidadoresListPage } from './cuidadores-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadoresListPageRoutingModule
  ],
  declarations: [CuidadoresListPage]
})
export class CuidadoresListPageModule {}
