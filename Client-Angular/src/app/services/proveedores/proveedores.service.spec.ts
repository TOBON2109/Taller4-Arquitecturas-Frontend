import { TestBed } from '@angular/core/testing';
import { ProveedoresService } from './proveedores.service';
import { PROVEEDORES } from '../../data/proveedores.interface';

describe('ProveedoresService', () => {
  let service: ProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoresService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllProveedores debería retornar un observable con los proveedores', (done) => {
      service.getAllProveedores().subscribe(proveedores => {
        expect(proveedores).toEqual(PROVEEDORES);
        expect(proveedores.length).toBe(PROVEEDORES.length);
        done();
      });
    });

  });

});