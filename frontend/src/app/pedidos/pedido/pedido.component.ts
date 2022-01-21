import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  elemento: PedidoComponent = new PedidoComponent();
  listado: Array<PedidoComponent> = [];

  isAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.elemento = new PedidoComponent();
    this.isAdd = true;
  }

  
}
