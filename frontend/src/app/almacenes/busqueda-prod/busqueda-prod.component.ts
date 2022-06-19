import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AlmacenConsultarComponent } from '../almacenes/almacen-consultar/almacen-consultar.component';
import { Almacen } from '../models/almacen';
import { AlmacenImpl } from '../models/almacen-impl';
import { Televisor } from '../models/televisor';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-busqueda-prod',
  templateUrl: './busqueda-prod.component.html',
  styleUrls: ['./busqueda-prod.component.css']
})
export class BusquedaProdComponent implements OnInit {

  televisores: Televisor[] = [];
  almacen: Almacen= new AlmacenImpl();
  almacenes: Almacen[] = [];
  almacenVerDatos: Almacen = new AlmacenImpl();


  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
  }

  verDatos(almacen: Almacen): void {
    this.almacenVerDatos = almacen;
  }

  hacerMetodoPersonalizado(marca: string, numeroPulgadas: number){
    this.productoService.getMetodoPersonalizado(marca,numeroPulgadas).subscribe((response) => {
      this.televisores = this.productoService.extraerTelevisores(response);
      });

  }

  // getMetodoPersonalizado

  // getNegocios(){
  //   return this.asociacionService.getNegociosAsociadosTercera(this.asociacion.urlAsociacion);
  // }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;


}
