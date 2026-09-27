import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PROVEEDORES_MOCK } from '../../mocks/proveedores.mocks';
import { ProveedoresTableComponent } from './proveedores-table.component';

describe('ProveedoresTableComponent', () => {
  let component: ProveedoresTableComponent;
  let fixture: ComponentFixture<ProveedoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedoresTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresTableComponent);
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

  it('debería renderizar una fila por cada proveedor', () => {
    component.proveedores = PROVEEDORES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.proveedores.length);
  });

  it('debería mostrar los datos del proveedor en cada columna', () => {
    component.proveedores = PROVEEDORES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const proveedor = component.proveedores[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(proveedor.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(proveedor.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(proveedor.nit);
      expect(columns[3].nativeElement.textContent.trim()).toBe(proveedor.city);
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Activo']).toBe('success');
    expect(component.statusMap['Inactivo']).toBe('danger');
    expect(component.statusMap['Pendiente']).toBe('warning');
  });
});