import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { PedidosPage } from './pedidos.page';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { PedidosTableComponent } from '../../components/pedidos-table/pedidos-table.component';
import { PEDIDOS_MOCK } from '../../mocks/pedidos.mocks';

describe('PedidosPage', () => {
  let component: PedidosPage;
  let fixture: ComponentFixture<PedidosPage>;
  let pedidosService: PedidosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosPage, PedidosTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosPage);
    component = fixture.componentInstance;
    pedidosService = TestBed.inject(PedidosService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllPedidos al iniciar', () => {
    const spyGetAllPedidos = jest.spyOn(pedidosService, 'getAllPedidos').mockReturnValue(of(PEDIDOS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllPedidos).toHaveBeenCalled();
  });

  it('debería asignar los pedidos recibidos del servicio', () => {
    jest.spyOn(pedidosService, 'getAllPedidos').mockReturnValue(of(PEDIDOS_MOCK));
    fixture.detectChanges();
    expect(component.pedidos).toEqual(PEDIDOS_MOCK);
  });

  it('debería pasar los pedidos al componente pedidos-table', () => {
    jest.spyOn(pedidosService, 'getAllPedidos').mockReturnValue(of(PEDIDOS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(PedidosTableComponent))
      .componentInstance;
    expect(tableComponent.pedidos).toEqual(PEDIDOS_MOCK);
  });

  it('debería manejar el error cuando falla getAllPedidos', () => {
    component.pedidos = [];
    const errorResponse = new Error('Error al cargar pedidos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(pedidosService, 'getAllPedidos').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(pedidosService.getAllPedidos).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.pedidos.length).toBe(0);
  });
});