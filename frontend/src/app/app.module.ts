import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaModule } from './carta/carta.module';
import { MainModule } from './main/main.module';
import { SecurityModule } from './security';
import { ShowErrorsMessagesComponent } from './common.component/show-errors-messages/show-errors-messages.component';
import { IngredienteModule } from './ingredientes';
import { PizzasModule } from './pizzas/pizzas.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsMessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, CartaModule, MainModule, SecurityModule, IngredienteModule, PizzasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
