import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Proveedor, ProveedorStatus } from '../../interfaces/proveedores.interface';

@Component({
  selector: 'app-proveedores-table',
  templateUrl: './proveedores-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class ProveedoresTableComponent {
  @Input() proveedores: Proveedor[] = [];

  statusMap: Record<ProveedorStatus, BadgeType> = {
    'Activo': 'success',
    'Inactivo': 'danger',
    'Pendiente': 'warning',
  };
}