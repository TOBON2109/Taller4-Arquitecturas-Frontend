import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { ProveedoresPage } from './proveedores.page';
import { ProveedoresService } from '../../services/proveedores/proveedores.service';
import { ProveedoresTableComponent } from '../../components/proveedores-table/proveedores-table.component';
import { PROVEEDORES_MOCK } from '../../mocks/proveedores.mocks';

describe('ProveedoresPage', () => {
  let component: ProveedoresPage;
  let fixture: ComponentFixture<ProveedoresPage>;
  let proveedoresService: ProveedoresService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedoresPage, ProveedoresTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresPage);
    component = fixture.componentInstance;
    proveedoresService = TestBed.inject(ProveedoresService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllProveedores al iniciar', () => {
    const spyGetAllProveedores = jest.spyOn(proveedoresService, 'getAllProveedores').mockReturnValue(of(PROVEEDORES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllProveedores).toHaveBeenCalled();
  });

  it('debería asignar los proveedores recibidos del servicio', () => {
    jest.spyOn(proveedoresService, 'getAllProveedores').mockReturnValue(of(PROVEEDORES_MOCK));
    fixture.detectChanges();
    expect(component.proveedores).toEqual(PROVEEDORES_MOCK);
  });

  it('debería pasar los proveedores al componente proveedores-table', () => {
    jest.spyOn(proveedoresService, 'getAllProveedores').mockReturnValue(of(PROVEEDORES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(ProveedoresTableComponent))
      .componentInstance;
    expect(tableComponent.proveedores).toEqual(PROVEEDORES_MOCK);
  });

  it('debería manejar el error cuando falla getAllProveedores', () => {
    component.proveedores = [];
    const errorResponse = new Error('Error al cargar proveedores');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(proveedoresService, 'getAllProveedores').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(proveedoresService.getAllProveedores).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.proveedores.length).toBe(0);
  });
});