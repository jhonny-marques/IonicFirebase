import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsDetailPage } from './pets-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PetsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsDetailPageRoutingModule {}
