import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/common-services/carrito.service';
import { PizzasViewModelService } from 'src/app/pizzas';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(public VM: PizzasViewModelService, public carrito: CarritoService) { }

  ngOnInit(): void {
    this.VM.list();
  }

}
