import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [CatalogoComponent, SliderComponent],
  exports: [CatalogoComponent],
  imports: [CommonModule],
})
export class CatalogoModule {}
