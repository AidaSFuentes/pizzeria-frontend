import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';




@NgModule({
  declarations: [
    CatalogoComponent
  ],
  exports: [
    CatalogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogoModule { }
