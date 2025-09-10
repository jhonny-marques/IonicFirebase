import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadoresDetailPage } from './cuidadores-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadoresDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadoresDetailPageRoutingModule {}
