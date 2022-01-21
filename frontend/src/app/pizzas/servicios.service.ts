import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_REQUIRED } from '../security'
import { NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';
import { ModoCRUD, ViewModelServiceBase } from '../base';
import { RESTDAOServiceBase } from '../base';



@Injectable({
  providedIn: 'root',
})
export class PizzasDAOService extends RESTDAOServiceBase<any, any> {
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
