import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { CategoriasPage } from './categorias.page';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { CategoriasTableComponent } from '../../components/categorias-table/categorias-table.component';
import { CATEGORIAS_MOCK } from '../../mocks/categorias.mocks';

describe('CategoriasPage', () => {
  let component: CategoriasPage;
  let fixture: ComponentFixture<CategoriasPage>;
  let categoriasService: CategoriasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasPage, CategoriasTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasPage);
    component = fixture.componentInstance;
    categoriasService = TestBed.inject(CategoriasService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCategorias al iniciar', () => {
    const spyGetAllCategorias = jest.spyOn(categoriasService, 'getAllCategorias').mockReturnValue(of(CATEGORIAS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllCategorias).toHaveBeenCalled();
  });

  it('debería asignar las categorías recibidas del servicio', () => {
    jest.spyOn(categoriasService, 'getAllCategorias').mockReturnValue(of(CATEGORIAS_MOCK));
    fixture.detectChanges();
    expect(component.categorias).toEqual(CATEGORIAS_MOCK);
  });

  it('debería pasar las categorías al componente categorias-table', () => {
    jest.spyOn(categoriasService, 'getAllCategorias').mockReturnValue(of(CATEGORIAS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(CategoriasTableComponent))
      .componentInstance;
    expect(tableComponent.categorias).toEqual(CATEGORIAS_MOCK);
  });

  it('debería manejar el error cuando falla getAllCategorias', () => {
    component.categorias = [];
    const errorResponse = new Error('Error al cargar categorías');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(categoriasService, 'getAllCategorias').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(categoriasService.getAllCategorias).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.categorias.length).toBe(0);
  });
});