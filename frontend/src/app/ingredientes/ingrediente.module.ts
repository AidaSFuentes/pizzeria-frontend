import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { IngredientesAddComponent, IngredientesComponent, IngredientesEditComponent, IngredientesListComponent, IngredientesViewComponent } from './componente.component';
import { AuthGuard, SecurityModule } from '../security';
import { FormsModule } from '@angular/forms';
import { INGREDIENTES_COMPONENTES } from './componente.component';

const routes: Routes = [
  { path: '', component: IngredientesListComponent},
  { path: '', component: IngredientesComponent},
  { path: '/add', component: IngredientesAddComponent, canActivate: [ AuthGuard ]},
  { path: '/:id/edit', component: IngredientesEditComponent},
  { path: '/:id', component: IngredientesViewComponent},
];

@NgModule({
  declarations: [
    INGREDIENTES_COMPONENTES
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    MyCoreModule, CommonServicesModule, SecurityModule
  ]
})
export class IngredienteModule { }
