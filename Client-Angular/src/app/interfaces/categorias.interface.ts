export interface Categoria {
  id: number;
  name: string;
  type: CategoriaType;
  description: string;
}

export type CategoriaType = 'Alimento' | 'Bebida' | 'Aseo' | 'Tecnologia';