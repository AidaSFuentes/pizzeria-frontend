import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteComponent } from './ingrediente.component';

describe('IngredientComponent', () => {
  let component: IngredienteComponent;
  let fixture: ComponentFixture<IngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
