import { TestBed } from '@angular/core/testing';

import { PedidoDAOService } from './pedido.service';

describe('ServiciosService', () => {
  let service: PedidoDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
