import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationService, NotificationService } from '../common-services';
import { ModoCRUD, RESTDAOServiceBase } from '../base';
import { CarritoService } from '../common-services/carrito.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/lib/my-core';
import { AuthService } from '../security';

@Injectable({
  providedIn: 'root',
})
export class PedidoDAOService extends RESTDAOServiceBase<any, any>{

  constructor(
    http: HttpClient
  ) {
    super(http, "pedidos")
  }

}




@Injectable({
  providedIn: 'root',
})
export  class PedidosViewModelService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected listURL = '/';

  constructor(protected notify: NotificationService, protected out: LoggerService, protected dao: PedidoDAOService,
    public auth: AuthService, protected router: Router, private navigation: NavigationService, public carrito: CarritoService) { }

  public get Modo(): ModoCRUD { return this.modo; }
  public get Listado(): Array<any> { return this.listado; }
  public get Elemento(): any { return this.elemento; }
  public get isAutenticated(): boolean { return this.auth.isAutenticated; }

  public list(): void {
    this.dao.query().subscribe({
      next: data => {
        this.listado = data;
        this.modo = 'list';
      },
      error: err => this.notify.add(err.message)
    });
  }

  public add(): void {
    this.elemento = {"id": 0, "direccion": "", "importe": 0 ,"estado": "solicitada", "lineas": []};
    this.carrito.Listado.forEach(item => {
    this.elemento.lineas.push({"idPizza": item.IdPizza, "cantidad": item.Cantidad});
    this.elemento.importe+=item.Total;
    });
    this.modo = 'add';
  }
  public edit(key: any): void {
    this.dao.get(key).subscribe({
      next: data => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      error: err => this.notify.add(err.message)
    });
  }
  public view(key: any): void {
    this.dao.get(key).subscribe({
      next: data => {
        this.elemento = data;
        this.modo = 'view';
      },
      error: err => this.notify.add(err.message)
    });
  }
  public delete(key: any): void {
    if (!window.confirm('¿Seguro que quieres eliminar el pedido?')) { return; }

    this.dao.remove(key).subscribe({
      next: data => this.list(),
      error: err => this.notify.add(err.message)
    });
  }

  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    // this.list();
    // this.load(this.page)
    // this.router.navigateByUrl(this.listURL);
    this.navigation.back()
  }

  public send(): void {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe({
          next: data =>{ this.carrito.clear(); this.cancel();},
          error: err => this.notify.add(err.message)
        });
        break;
      case 'edit':
        this.dao.change(this.idOriginal, this.elemento).subscribe({
          next: data => this.cancel(),
          error: err => this.notify.add(err.message)
        });
        break;
      case 'view':
        this.cancel();
        break;
    }
  }

  clear() {
    this.elemento = {};
    this.idOriginal = null;
    this.listado = [];
  }
}
