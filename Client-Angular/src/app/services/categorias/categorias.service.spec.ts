import { TestBed } from '@angular/core/testing';
import { CategoriasService } from './categorias.service';
import { CATEGORIAS } from '../../data/categorias.interface';

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllCategorias debería retornar un observable con las categorías', (done) => {
      service.getAllCategorias().subscribe(categorias => {
        expect(categorias).toEqual(CATEGORIAS);
        expect(categorias.length).toBe(CATEGORIAS.length);
        done();
      });
    });

  });

});