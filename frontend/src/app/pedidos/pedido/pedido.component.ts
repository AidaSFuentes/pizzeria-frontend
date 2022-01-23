import { Component, OnInit } from '@angular/core';
import { PedidosViewModelService } from '../pedido.service';

@Component({
  selector: 'app-order',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  constructor(protected vm: PedidosViewModelService) { }
  public get VM():PedidosViewModelService{return this.vm;}

  ngOnInit(): void {
    this.vm.add();
  }

}
