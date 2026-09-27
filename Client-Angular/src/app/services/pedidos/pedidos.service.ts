import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pedido } from '../../interfaces/pedidos.interface';
import { PEDIDOS } from '../../data/pedidos.interface';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  getAllPedidos(): Observable<Pedido[]> {
    return of(PEDIDOS);
  }
}