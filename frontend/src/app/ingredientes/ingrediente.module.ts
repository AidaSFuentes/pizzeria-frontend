import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { IngredientesAddComponent, IngredientesComponent, IngredientesEditComponent, IngredientesListComponent, IngredientesViewComponent } from './componente.component';
import { AuthGuard, SecurityModule } from '../security';

const routes: Routes = [
  { path: '', component: IngredientesListComponent},
  { path: '/add', component: IngredientesAddComponent, canActivate: [ AuthGuard ]},
  { path: '/:id/edit', component: IngredientesEditComponent},
  { path: '/:id', component: IngredientesViewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MyCoreModule, CommonServicesModule, SecurityModule
  ]
})
export class IngredienteModule { }
