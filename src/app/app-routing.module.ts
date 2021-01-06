import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tinka',
    pathMatch: 'full'
  },
  {
    path: 'tinka',
    loadChildren: () => import('./pages/tinka/tinka.module').then( m => m.TinkaPageModule)
  },
  {
    path: 'kabala',
    loadChildren: () => import('./pages/kabala/kabala.module').then( m => m.KabalaPageModule)
  },
  {
    path: 'gana-diario',
    loadChildren: () => import('./pages/gana-diario/gana-diario.module').then( m => m.GanaDiarioPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
