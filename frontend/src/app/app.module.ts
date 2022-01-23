import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerService, MyCoreModule } from 'src/lib/my-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoModule } from './catalogo/catalogo.module';
import { CommonServicesModule } from './common-services/common-services.module';
import { CommonComponentsModule } from './common.component';
import { IngredienteModule } from './ingredientes/ingrediente.module';
import { MainModule } from './main/main.module';
import { PedidoModule } from './pedidos/pedido.module';
import { PizzaModule } from './pizzas';
import { SecurityModule } from './security';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MainModule,
    CommonComponentsModule,
    CommonServicesModule,
    SecurityModule,
    CatalogoModule,
    PedidoModule,
    MyCoreModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
