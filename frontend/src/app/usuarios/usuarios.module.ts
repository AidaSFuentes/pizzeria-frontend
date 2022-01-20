
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: UsuarioComponent },
];


@NgModule({
  declarations: [
    UsuarioComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class UsuarioModule { }
