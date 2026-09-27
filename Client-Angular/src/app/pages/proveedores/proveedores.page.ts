import { Component, inject } from '@angular/core';
import { ProveedoresTableComponent } from '../../components/proveedores-table/proveedores-table.component';
import { Proveedor } from '../../interfaces/proveedores.interface';
import { ProveedoresService } from '../../services/proveedores/proveedores.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  imports: [ProveedoresTableComponent, AlertComponent],
})
export class ProveedoresPage {
  proveedores: Proveedor[] = [];
  state: State = 'init';
  private proveedoresService = inject(ProveedoresService);

  ngOnInit(): void {
    this.state = 'loading';
    this.proveedoresService.getAllProveedores().subscribe({
      next: (proveedores) => { this.proveedores = proveedores; this.state = 'success'; },
      error: (error) => { console.error(error); this.state = 'error'; },
    });
  }
}