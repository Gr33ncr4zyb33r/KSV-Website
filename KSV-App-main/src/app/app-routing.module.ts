import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Tab1Page} from "./Startseite/tab1.page"

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'Meldungen',
    loadChildren: () => import('./Meldungen/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: 'list-data',
    component: Tab1Page,
  },
  {
    path: 'Ernährung',
    loadChildren: () => import('./Ernährung/tab5.module').then(m => m.Tab5PageModule)
  },
  {
    path: 'Trainingspläne',
    loadChildren: () => import('./Trainingspläne/tab6.module').then(m => m.Tab6PageModule)
  },
  {
    path: 'Geräte',
    loadChildren: () => import('./Geräte/tab7.module').then(m => m.Tab7PageModule)
  },
  {
    path: 'Motivation',
    loadChildren: () => import('./Motivation/tab8.module').then(m => m.Tab8PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
