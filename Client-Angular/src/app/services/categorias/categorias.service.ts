import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categoria } from '../../interfaces/categorias.interface';
import { CATEGORIAS } from '../../data/categorias.interface';

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  getAllCategorias(): Observable<Categoria[]> {
    return of(CATEGORIAS);
  }
}