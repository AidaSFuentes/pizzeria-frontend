import { Component, OnDestroy, OnInit } from '@angular/core';
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
  ngOnInit(): void {}
}

@Component({
  selector: 'app-pizzas-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css'],
})
export class PizzasEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: PizzasViewModelService) {}
  public get VM(): PizzasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}

@Component({
  selector: 'app-pizzas-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css'],
})
export class PizzasViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: PizzasViewModelService) {}
  public get VM(): PizzasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
export const PIZZAS_COMPONENTES = [
  PizzasComponent,
  PizzasAddComponent,
  PizzasListComponent,
  PizzasEditComponent,
  PizzasViewComponent,
];
