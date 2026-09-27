import type { Categoria } from "../interfaces/Categorias";

export const CATEGORIAS: Categoria[] = [
  { id: 1, name: 'Lacteos', type: 'Alimento', description: 'Leche, quesos y derivados' },
  { id: 2, name: 'Carnes', type: 'Alimento', description: 'Carnes rojas y blancas' },
  { id: 3, name: 'Frutas', type: 'Alimento', description: 'Frutas frescas de temporada' },
  { id: 4, name: 'Verduras', type: 'Alimento', description: 'Verduras y hortalizas' },
  { id: 5, name: 'Gaseosas', type: 'Bebida', description: 'Bebidas carbonatadas' },
  { id: 6, name: 'Jugos', type: 'Bebida', description: 'Jugos naturales y procesados' },
  { id: 7, name: 'Detergentes', type: 'Aseo', description: 'Productos de limpieza para el hogar' },
  { id: 8, name: 'Cuidado Personal', type: 'Aseo', description: 'Jabones, shampoo y similares' },
  { id: 9, name: 'Electrodomesticos', type: 'Tecnologia', description: 'Equipos electronicos del hogar' },
  { id: 10, name: 'Accesorios', type: 'Tecnologia', description: 'Accesorios tecnologicos varios' },
];