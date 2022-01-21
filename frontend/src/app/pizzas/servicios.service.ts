import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_REQUIRED } from '../security'
import { NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';
import { ModoCRUD } from '../base/tipos';
import { RESTDAOService } from '../ingredientes/servicios.service';


export abstract class ViewModelServiceBase<T, K> {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<T> = [];
  protected elemento: T | null = null;
  protected idOriginal: K | null = null;

  constructor(
    protected notify: NotificationService,
    protected out: LoggerService,
    protected dao: RESTDAOService<T, K>
  ) {}

  public get Modo(): ModoCRUD {
    return this.modo;
  }
  public get Listado(): Array<T> {
    return this.listado;
  }
  public get Elemento(): T | null {
    return this.elemento;
  }

  public list(): void {
    this.dao.query().subscribe({
      next: (data) => {
        this.listado = data;
        this.modo = 'list';
      },
      error: (err) => this.notify.add(err.message),
    });
  }

  public add(): void {
    this.elemento = null;
    this.modo = 'add';
  }

  public edit(key: K): void {
    this.dao.get(key).subscribe({
      next: (data) => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      error: (err) => this.notify.add(err.message),
    });
  }

  public view(key: K): void {
    this.dao.get(key).subscribe({
      next: (data) => {
        this.elemento = data;
        this.modo = 'view';
      },
      error: (err) => this.notify.add(err.message),
    });
  }

  public delete(key: K): void {
    if (!window.confirm('¿Seguro?')) {
      return;
    }
    this.dao.remove(key).subscribe({
      next: (data) => this.list(), // this.load(),
      error: (err) => this.notify.add(err.message),
    });
  }

  clear() {
    this.elemento = null;
    this.idOriginal = null;
    this.listado = [];
  }

  public cancel(): void {
    this.elemento = null;
    this.idOriginal = null;
    this.list();
  }

  public send(): void {
    switch (this.modo) {
      case 'add':
        if (this.elemento)
          this.dao.add(this.elemento).subscribe({
            next: (data) => this.cancel(),
            error: (err) => this.notify.add(err.message),
          });
        break;
      case 'edit':
        if (this.idOriginal && this.elemento)
          this.dao.change(this.idOriginal, this.elemento).subscribe({
            next: (data) => this.cancel(),
            error: (err) => this.notify.add(err.message),
          });
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class PizzasDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'pizzas', {
      context: new HttpContext().set(AUTH_REQUIRED, true),
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class PizzasViewModelService extends ViewModelServiceBase<any, any> {
  constructor(
    notify: NotificationService,
    out: LoggerService,
    dao: PizzasDAOService
  ) {
    super(notify, out, dao);
  }
}
