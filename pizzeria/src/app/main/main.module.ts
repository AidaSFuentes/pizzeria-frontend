import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
