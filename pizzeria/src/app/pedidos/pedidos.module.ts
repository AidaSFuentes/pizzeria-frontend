import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PedidosModule {
  id: number | null = null;
  nombre: string | null = null;
  descripcion: string | null = null;
  precio: number | null = null;

 }


  export class FormulariPedido implements OnInit{

    elemento: PedidosModule = new FormularioPedido();
    isAdd: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    add(): void {
      this.elemento = new PedidosModule();
      this.isAdd = true;
    }
      cancel(): void {

      }

}
