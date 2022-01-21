import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_REQUIRED } from '../security';
import { NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';
import { RESTDAOServiceBase, ViewModelServiceBase } from '../base';
import { ModoCRUD } from '../base';


@Injectable({
  providedIn: 'root',
})
export class IngredientesDAOService extends RESTDAOServiceBase<any, any> {
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
