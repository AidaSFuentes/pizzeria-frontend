import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
