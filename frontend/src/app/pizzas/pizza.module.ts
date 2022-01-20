import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: PizzaComponent },
];

@NgModule({
  declarations: [ PizzaComponent ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class PizzaModule { }
