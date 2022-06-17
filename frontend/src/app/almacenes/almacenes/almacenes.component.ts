import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil, faEye, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { Almacen } from '../models/almacen';

import { AlmacenImpl } from '../models/almacen-impl';
import { AlmacenService } from '../service/almacen.service';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css']
})
export class AlmacenesComponent implements OnInit {

  almacenes: Almacen[] = [];
  almacenVerDatos: Almacen= new AlmacenImpl();



  constructor(
    private router: Router,
    private almacenService: AlmacenService,
    ) { }

  ngOnInit(): void {
    this.almacenService.getAlmacenes().subscribe((response) =>
    this.almacenes = this.almacenService.extraerAlmacenes(response));
  }

  verDatos(almacen: Almacen): void {
    this.almacenVerDatos = almacen;
  }

  onAlmacenEliminar(almacen: Almacen) {
    console.log(`Ha eliminado el almacen de la localidad de ${almacen.localidad}`);
    this.almacenService.deleteAlmacen(almacen.idAlmacen).subscribe();
    this.router.navigate(['almacenes']);
  }

  onAlmacenEditar(almacen: Almacen){
    this.verDatos(almacen);
  let url = `almacenes/editar/${almacen.idAlmacen}`;
  this.router.navigate([url])}

  onAlmacenConsultar(almacen: Almacen){
    this.verDatos(almacen);
    let url = `almacen/consultar/${almacen.idAlmacen}`;
    this.router.navigate([url])
  }


  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
