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
    path: 'novo-contato',
    loadChildren: () => import('./novo-contato/novo-contato.module').then( m => m.NovoContatoPageModule)
  },
  {
    path: 'informacoes-contato',
    loadChildren: () => import('./informacoes-contato/informacoes-contato.module').then( m => m.InformacoesContatoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
