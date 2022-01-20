import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IngredienteComponent } from './ingrediente/ingrediente.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IngredienteComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class IngredienteModule { }
