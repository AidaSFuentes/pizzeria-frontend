import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CatalogoComponent, SliderComponent],
  exports: [CatalogoComponent],
  imports: [CommonModule, RouterModule.forChild([])],
})
export class CatalogoModule {}
