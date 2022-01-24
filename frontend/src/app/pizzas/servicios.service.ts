import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService, AUTH_REQUIRED } from '../security'
import { NavigationService, NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';
import { ModoCRUD, ViewModelServiceBase } from '../base';
import { RESTDAOServiceBase } from '../base';
import { Router } from '@angular/router';

// export class Pizza {
//   id: number = 0;
//   nombre: string | null = null;
//   ingredientes: number[] = [];
//   imgURL: string | null = null;
//   precio: number = 0;
// }


@Injectable({
  providedIn: 'root',
})
export class PizzasDAOService extends RESTDAOServiceBase<any, any> {
  constructor(http: HttpClient) {
    super(http, 'pizzas', {
      //context: new HttpContext().set(AUTH_REQUIRED, true),
      context: new HttpContext(),
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
    dao: PizzasDAOService,
    auth: AuthService,
    router: Router,
    navigation: NavigationService,
  ) {
    super(notify, out, dao, auth, router, navigation);
  }
  public override add(): void {
    this.elemento = { id: 0 };
    this.modo = 'add';
  }
}
