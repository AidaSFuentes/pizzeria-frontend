import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent} from './pedido/pedido.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../common.component';


@NgModule({
  declarations: [
    PedidoComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),CommonComponentsModule,
  ]
})
export class PedidoModule { }
