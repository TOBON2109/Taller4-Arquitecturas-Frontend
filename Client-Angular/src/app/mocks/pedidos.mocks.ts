import { Pedido } from "../interfaces/pedidos.interface";

export const PEDIDOS_MOCK: Pedido[] = [
    {
        id: 1,
        client: 'Carlos Ramírez',
        total: 85000,
        status: 'Entregado',
    },
    {
        id: 2,
        client: 'Ana Gómez',
        total: 42000,
        status: 'Enviado',
    }
];