import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_REQUIRED } from '../security';
import { NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';


export type ModoCRUD = 'list' | 'add' | 'edit' | 'view' | 'delete';

export abstract class RESTDAOService<T, K> {
  protected baseUrl = environment.apiURL;
  constructor(
    protected http: HttpClient,
    entidad: string,
    protected option = {}
  ) {
    this.baseUrl += entidad;
  }
  query(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl, this.option);
  }
  get(id: K): Observable<T> {
    return this.http.get<T>(this.baseUrl + '/' + id, this.option);
  }
  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item, this.option);
  }
  change(id: K, item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + '/' + id, item, this.option);
  }
  remove(id: K): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + id, this.option);
  }
}

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
export class IngredientesDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'ingredientes', {
      context: new HttpContext().set(AUTH_REQUIRED, true),
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class IngredientesViewModelService extends ViewModelServiceBase<any, any> {
  constructor(
    notify: NotificationService,
    out: LoggerService,
    dao: IngredientesDAOService
  ) {
    super(notify, out, dao);
  }
}
