import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proveedor } from '../../interfaces/proveedores.interface';
import { PROVEEDORES } from '../../data/proveedores.interface';

@Injectable({ providedIn: 'root' })
export class ProveedoresService {
  getAllProveedores(): Observable<Proveedor[]> {
    return of(PROVEEDORES);
  }
}