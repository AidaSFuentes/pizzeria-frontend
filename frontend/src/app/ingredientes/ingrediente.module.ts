import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingrediente/ingrediente.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IngredientComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class IngredientModule { }
