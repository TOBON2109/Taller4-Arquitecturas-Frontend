import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PEDIDOS_MOCK } from '../../mocks/pedidos.mocks';
import { PedidosTableComponent } from './pedidos-table.component';

describe('PedidosTableComponent', () => {
  let component: PedidosTableComponent;
  let fixture: ComponentFixture<PedidosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada pedido', () => {
    component.pedidos = PEDIDOS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.pedidos.length);
  });

  it('debería mostrar los datos del pedido en cada columna', () => {
    component.pedidos = PEDIDOS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const pedido = component.pedidos[index];
      const pedidoTotal = new CurrencyPipe('en-US').transform(pedido.total, 'COP', 'symbol-narrow', '1.0-0');

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(pedido.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(pedido.client);
      expect(columns[2].nativeElement.textContent.trim()).toBe(pedidoTotal ?? '');
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Pendiente']).toBe('warning');
    expect(component.statusMap['Enviado']).toBe('primary');
    expect(component.statusMap['Entregado']).toBe('success');
    expect(component.statusMap['Cancelado']).toBe('danger');
  });
});