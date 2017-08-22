import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent, AccueilResolver } from './views/accueil';
import { DepartementComponent, DepartementResolver } from './views/departement';
import { GareComponent, GareResolver } from './views/gare';
import { TarifComponent, TarifResolver } from './views/tarif';
import { TrajetComponent, TrajetResolver } from './views/trajet';


const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent,
    resolve: { data: AccueilResolver }
  }, {
    path: 'departements',
    children: [
      {
        path: '',
        outlet: 'left-outlet',
        component: DepartementComponent,
        resolve: { departements: DepartementResolver }
      }, {
        path: '',
        component: GareComponent,
        resolve: { data: GareResolver }
      }, {
        path: ':departement',
        component: GareComponent,
        resolve: { data: GareResolver }
      }
    ]
  }, {
    path: 'partir',
    children: [
      {
        path: '',
        outlet: 'left-outlet',
        component: TrajetComponent,
        resolve: { origines: TrajetResolver }
      }, {
        path: '',
        component: TarifComponent,
        resolve: { origines: TarifResolver }
      }
    ]
  }, {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
