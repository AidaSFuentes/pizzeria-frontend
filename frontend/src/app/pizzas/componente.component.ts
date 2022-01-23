import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PizzasViewModelService } from './servicios.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.css'],
})
export class PizzasComponent implements OnInit {
  constructor(protected vm: PizzasViewModelService) {}
  public get VM(): PizzasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
  ngOnDestroy(): void {
    this.vm.clear();
  }
}

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.css'],
})
export class PizzasListComponent implements OnInit {
  constructor(protected vm: PizzasViewModelService) {}
  public get VM(): PizzasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-pizzas-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css'],
})
export class PizzasAddComponent implements OnInit {
  constructor(protected vm: PizzasViewModelService) {}
  public get VM(): PizzasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.VM.add();
  }
}

@Component({
  selector: 'app-pizzas-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css'],
})
export class PizzasEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: PizzasViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): PizzasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

@Component({
  selector: 'app-pizzas-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css'],
})
export class PizzasViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: PizzasViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): PizzasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.view(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const PIZZAS_COMPONENTES = [
  PizzasComponent,
  PizzasAddComponent,
  PizzasListComponent,
  PizzasEditComponent,
  PizzasViewComponent,
];
