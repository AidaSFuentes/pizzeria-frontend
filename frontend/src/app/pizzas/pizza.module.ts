import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonServicesModule } from 'src/app/common-services';
import { FormsModule } from '@angular/forms';
import { MyCoreModule } from 'src/lib/my-core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, SecurityModule } from 'src/app/security';
import {
  PizzasListComponent,
  PizzasAddComponent,
  PizzasEditComponent,
  PizzasViewComponent,
  PIZZAS_COMPONENTES,
} from './componente.component';
import { PizzasComponent } from '.';
import { CommonComponentsModule } from '../common.component';

const routes: Routes = [
  { path: '', component: PizzasListComponent },
  { path: 'add', component: PizzasAddComponent },
  { path: ':id/edit', component: PizzasEditComponent },
  { path: ':id', component: PizzasViewComponent },
];

@NgModule({
  declarations: [PIZZAS_COMPONENTES],
  imports: [
    CommonServicesModule,
    FormsModule,
    MyCoreModule,
    SecurityModule,
    CommonModule,
    RouterModule.forChild(routes),
    CommonComponentsModule,
  ],
})
export class PizzaModule {}
