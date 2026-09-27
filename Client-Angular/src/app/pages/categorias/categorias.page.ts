import { Component, inject } from '@angular/core';
import { CategoriasTableComponent } from '../../components/categorias-table/categorias-table.component';
import { Categoria } from '../../interfaces/categorias.interface';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  imports: [CategoriasTableComponent, AlertComponent],
})
export class CategoriasPage {
  categorias: Categoria[] = [];
  state: State = 'init';
  private categoriasService = inject(CategoriasService);

  ngOnInit(): void {
    this.state = 'loading';
    this.categoriasService.getAllCategorias().subscribe({
      next: (categorias) => { this.categorias = categorias; this.state = 'success'; },
      error: (error) => { console.error(error); this.state = 'error'; },
    });
  }
}