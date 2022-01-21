import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent} from './pedido/pedido.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidoComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([])
  ]
})
export class PedidoModule { }
