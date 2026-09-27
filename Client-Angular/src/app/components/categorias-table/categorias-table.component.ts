import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Categoria, CategoriaType } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-categorias-table',
  templateUrl: './categorias-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CategoriasTableComponent {
  @Input() categorias: Categoria[] = [];

  typeMap: Record<CategoriaType, BadgeType> = {
    'Alimento': 'success',
    'Bebida': 'info',
    'Aseo': 'primary',
    'Tecnologia': 'dark',
  };
}