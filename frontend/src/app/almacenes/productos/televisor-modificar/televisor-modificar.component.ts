import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPencilAlt, faCirclePlus, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';
import { TelevisorImpl } from '../../models/televisor-impl';
import { ProductoService } from '../../service/producto.service';
import { ChangeDetectorRef,AfterContentChecked} from '@angular/core'

@Component({
  selector: 'app-televisor-modificar',
  templateUrl: './televisor-modificar.component.html',
  styleUrls: ['./televisor-modificar.component.css']
})
export class TelevisorModificarComponent implements OnInit, AfterContentChecked{

  datos1;
  datos;
  opcionSeleccionada: string = '0'
  verSeleccion: string = '';
  televisor: TelevisorImpl = new TelevisorImpl();
  almacenes: Almacen[] = [];

  constructor(private productoService: ProductoService,
              private almacenService: AlmacenService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef) {this.datos=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
             this.datos1=[17, 22, 29, 32, 43, 49, 55, 65, 75, 80, 100] }

  ngOnInit(): void {
    let id: string = this.cargarTelevisor();
    this.productoService.getTelevisor(id).subscribe(res =>
      this.televisor = this.productoService.mapearTelevisor(res));
    this.almacenService.getAlmacenes().subscribe((response) =>
      this.almacenes = this.almacenService.extraerAlmacenes(response));
  }

  ngAfterContentChecked() : void {
    this.cdr.detectChanges();
}
  cargarTelevisor(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarTelevisor(): void {
    this.productoService.updateTelevisor(this.televisor).subscribe();
  }

  capturar() {
        // Pasamos el valor seleccionado a la variable verSeleccion
        this.verSeleccion = this.opcionSeleccionada;
    }


}
