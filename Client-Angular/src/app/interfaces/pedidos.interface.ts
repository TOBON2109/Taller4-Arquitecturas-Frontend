export interface Pedido {
  id: number;
  client: string;
  total: number;
  status: PedidoStatus;
}

export type PedidoStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';