import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService, AUTH_REQUIRED } from '../security';
import { NavigationService, NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';
import { RESTDAOServiceBase, ViewModelServiceBase } from '../base';
import { ModoCRUD } from '../base';
import { Router } from '@angular/router';

// export class Ingrediente {
//   id: number = 0;
//   nombre: string | null = null;
//   tipo: string | null = null;
//   precio: number = 0;
// }

@Injectable({
  providedIn: 'root',
})
export class IngredientesDAOService extends RESTDAOServiceBase<any, any> {
  constructor(http: HttpClient) {
    super(http, 'ingredientes', {
      //context: new HttpContext().set(AUTH_REQUIRED, true),
      context: new HttpContext(),
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class IngredientesViewModelService extends ViewModelServiceBase<
  any,
  any
> {
  constructor(
    notify: NotificationService,
    out: LoggerService,
    dao: IngredientesDAOService,
    auth: AuthService,
    router: Router,
    navigation: NavigationService
  ) {
    super(notify, out, dao, auth, router, navigation);
  }
  public override add(): void {
    this.elemento = { id: 0 };
    this.modo = 'add';
  }
}
