import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadoresListPage } from './cuidadores-list.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadoresListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadoresListPageRoutingModule {}
