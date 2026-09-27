import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Pedido, PedidoStatus } from '../../interfaces/pedidos.interface';

@Component({
  selector: 'app-pedidos-table',
  templateUrl: './pedidos-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class PedidosTableComponent {
  @Input() pedidos: Pedido[] = [];

  statusMap: Record<PedidoStatus, BadgeType> = {
    'Pendiente': 'warning',
    'Enviado': 'primary',
    'Entregado': 'success',
    'Cancelado': 'danger',
  };
}