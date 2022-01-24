import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import {
  IngredientesAddComponent,
  IngredientesComponent,
  IngredientesEditComponent,
  IngredientesListComponent,
  IngredientesViewComponent,
} from './componente.component';
import { AuthGuard, SecurityModule } from '../security';
import { FormsModule } from '@angular/forms';
import { INGREDIENTES_COMPONENTES } from './componente.component';
import { CommonComponentsModule } from '../common.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IngredientesListComponent },
  // { path: '', component: IngredientesComponent},
  { path: 'add', component: IngredientesAddComponent },
  { path: ':id/edit', component: IngredientesEditComponent },
  { path: '/:id', component: IngredientesViewComponent},
];

@NgModule({
  declarations: [INGREDIENTES_COMPONENTES],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MyCoreModule,
    CommonServicesModule,
    CommonComponentsModule,
    SecurityModule,
  ],
})
export class IngredienteModule {}
