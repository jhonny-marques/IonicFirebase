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
  // {
  //   path: 'pets-list/:id',
  //   loadChildren: () => import('./pages/pets-list/pets-list.module').then( m => m.PetsListPageModule)
  // },
  {
    path: 'pets-detail', // Rota para adicionar o pet
    loadChildren: () => import('./pages/pets-detail/pets-detail.module').then( m => m.PetsDetailPageModule)
  },
  {
    path: 'pets-detail/:id', // Rota para editar o pet
    loadChildren: () => import('./pages/pets-detail/pets-detail.module').then( m => m.PetsDetailPageModule)
  },
  {
    path: 'cuidadores-list',
    loadChildren: () => import('./pages/cuidadores-list/cuidadores-list.module').then( m => m.CuidadoresListPageModule)
  },
  {
    path: 'cuidadores-detail',
    loadChildren: () => import('./pages/cuidadores-detail/cuidadores-detail.module').then( m => m.CuidadoresDetailPageModule)
  },
  {
    path: 'cuidadores-detail/:id',
    loadChildren: () => import('./pages/cuidadores-detail/cuidadores-detail.module').then( m => m.CuidadoresDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
