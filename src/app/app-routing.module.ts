import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from '../app/paises/pages/por-pais/por-pais.component';
import { PorCapitalComponent } from '../app/paises/pages/por-capital/por-capital.component';
import { PorRegionComponent } from '../app/paises/pages/por-region/por-region.component';
import { VerPaisComponent } from '../app/paises/pages/ver-pais/ver-pais.component';


const routes: Routes = [
  { path: '', component: PorPaisComponent,pathMatch: 'full' },
  { path: 'por-capital', component: PorCapitalComponent},
  { path: 'por-region', component: PorRegionComponent },
  { path: 'ver-pais/:id', component: VerPaisComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
