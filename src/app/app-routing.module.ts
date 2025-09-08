import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pets-list',
    loadChildren: () => import('./pages/pets-list/pets-list.module').then( m => m.PetsListPageModule)
  },
  {
    path: 'pets-list/:id',
    loadChildren: () => import('./pages/pets-list/pets-list.module').then( m => m.PetsListPageModule)
  },
  {
    path: 'pets-detail',
    loadChildren: () => import('./pages/pets-detail/pets-detail.module').then( m => m.PetsDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
