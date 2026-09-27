import { Component, inject } from '@angular/core';
import { PedidosTableComponent } from '../../components/pedidos-table/pedidos-table.component';
import { Pedido } from '../../interfaces/pedidos.interface';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  imports: [PedidosTableComponent, AlertComponent],
})
export class PedidosPage {
  pedidos: Pedido[] = [];
  state: State = 'init';
  private pedidosService = inject(PedidosService);

  ngOnInit(): void {
    this.state = 'loading';
    this.pedidosService.getAllPedidos().subscribe({
      next: (pedidos) => { this.pedidos = pedidos; this.state = 'success'; },
      error: (error) => { console.error(error); this.state = 'error'; },
    });
  }
}