import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CATEGORIAS_MOCK } from '../../mocks/categorias.mocks';
import { CategoriasTableComponent } from './categorias-table.component';

describe('CategoriasTableComponent', () => {
  let component: CategoriasTableComponent;
  let fixture: ComponentFixture<CategoriasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasTableComponent);
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

  it('debería renderizar una fila por cada categoría', () => {
    component.categorias = CATEGORIAS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.categorias.length);
  });

  it('debería mostrar los datos de la categoría en cada columna', () => {
    component.categorias = CATEGORIAS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const categoria = component.categorias[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(categoria.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(categoria.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(categoria.description);
    });
  });

  it('debería mapear cada tipo a su BadgeType correcto', () => {
    expect(component.typeMap['Alimento']).toBe('success');
    expect(component.typeMap['Bebida']).toBe('info');
    expect(component.typeMap['Aseo']).toBe('primary');
    expect(component.typeMap['Tecnologia']).toBe('dark');
  });
});