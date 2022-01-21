import { Component, OnDestroy, OnInit } from '@angular/core';
import { IngredientesViewModelService } from './servicios.service';


@Component({
  selector: 'app-ingredientes',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.css']
 })
 export class IngredientesComponent implements OnInit {
  constructor(protected vm: IngredientesViewModelService) { }
  public get VM(): IngredientesViewModelService { return this.vm; }
  ngOnInit(): void {
  this.vm.list();
  }
 }

 @Component({
  selector: 'app-ingredientes-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.css']
 })
 export class IngredientesListComponent implements OnInit {
  constructor(protected vm: IngredientesViewModelService) { }
  public get VM(): IngredientesViewModelService { return this.vm; }
  ngOnInit(): void {
    this.vm.list();
  }
 }
 @Component({
  selector: 'app-ingredientes-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
 })
 export class IngredientesAddComponent implements OnInit {
  constructor(protected vm: IngredientesViewModelService) { }
  public get VM(): IngredientesViewModelService { return this.vm; }
  ngOnInit(): void { }
 }
 @Component({
  selector: 'app-ingredientes-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
 })
 export class IngredientesEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: IngredientesViewModelService) { }
  public get VM(): IngredientesViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
 }
 @Component({
  selector: 'app-ingredientes-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css']
 })
 export class IngredientesViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: IngredientesViewModelService) { }
  public get VM(): IngredientesViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
 }
 export const INGREDIENTES_COMPONENTES = [
  IngredientesComponent, IngredientesListComponent, IngredientesAddComponent,
  IngredientesEditComponent, IngredientesViewComponent,
 ];

