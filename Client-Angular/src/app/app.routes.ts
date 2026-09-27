import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';
import { CategoriasPage } from './pages/categorias/categorias.page';
import { ProveedoresPage } from './pages/proveedores/proveedores.page';
import { PedidosPage } from './pages/pedidos/pedidos.page';

export const routes: Routes = [
  { path: 'users', component: UsersPage },
  { path: 'products', component: ProductsPage },
  { path: 'date', component: DatePage },
  { path: 'categorias', component: CategoriasPage },
  { path: 'proveedores', component: ProveedoresPage },
  { path: 'pedidos', component: PedidosPage },
  { path: '**', redirectTo: 'users' },
];