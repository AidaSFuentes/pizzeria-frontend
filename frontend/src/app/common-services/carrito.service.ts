import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/lib/my-core';

export class LineaPedido {
  constructor(
    private idPizza: number,
    private precio: number,
    private cantidad: number = 1
  ) {}
  public get IdPizza() {
    return this.idPizza;
  }
  public get Cantidad() {
    return this.cantidad;
  }
  public get Precio() {
    return this.precio;
  }
  public get Total() {
    return this.precio * this.cantidad;
  }
  public add() {
    this.cantidad++;
  }
  public remove() {
    if (this.cantidad > 2) {
      this.cantidad--;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private listado: Array<LineaPedido> = [];

  constructor(private out: LoggerService) {}

  public get Listado(): Array<LineaPedido> {
    return Object.assign([], this.listado);
  }
  public get HayCarrito(): boolean {
    return this.listado.length > 0;
  }

  public add( idPizza: number, precio: number, cantidad: number = 1) {

      this.listado.push(new LineaPedido(idPizza, precio, cantidad) );

  }

  public remove(index: number) {
    if (index < 0 || index >= this.listado.length) {
      this.out.error('Index out of range.');
      return;
    }
    this.listado.splice(index, 1);
  }

  public clear() {
    if (this.HayCarrito) {
      this.listado.splice(0);
    }
  }
}
