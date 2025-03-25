import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadChildren: () => import('../Startseite/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'Informationen',
        loadChildren: () => import('../Information/tab3.module').then(m => m.Tab3PageModule)
      },
     {
        path: 'Meldungen',
        loadChildren: () => import('../Meldungen/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'Ernährung',
        loadChildren: () => import('../Ernährung/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'Trainingspläne',
        loadChildren: () => import('../Trainingspläne/tab6.module').then(m => m.Tab6PageModule)
      },
      {
        path: 'Geräte',
        loadChildren: () => import('../Geräte/tab7.module').then(m => m.Tab7PageModule)
      },
      {
        path: 'Motivation',
        loadChildren: () => import('../Motivation/tab8.module').then(m => m.Tab8PageModule)
      },
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
