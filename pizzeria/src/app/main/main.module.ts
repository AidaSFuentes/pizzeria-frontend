import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
