import { TestBed } from '@angular/core/testing';
import { PedidosService } from './pedidos.service';
import { PEDIDOS } from '../../data/pedidos.interface';

describe('PedidosService', () => {
  let service: PedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllPedidos debería retornar un observable con los pedidos', (done) => {
      service.getAllPedidos().subscribe(pedidos => {
        expect(pedidos).toEqual(PEDIDOS);
        expect(pedidos.length).toBe(PEDIDOS.length);
        done();
      });
    });

  });

});