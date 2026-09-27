export interface Proveedor {
  id: number;
  name: string;
  nit: string;
  city: string;
  status: ProveedorStatus;
}

export type ProveedorStatus = 'Activo' | 'Inactivo' | 'Pendiente';