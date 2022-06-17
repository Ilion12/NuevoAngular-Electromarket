import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { Almacen } from '../../models/almacen';
import { LavadoraImpl } from '../../models/lavadora-impl';
import { TelevisorImpl } from '../../models/televisor-impl';
import { AlmacenService } from '../../service/almacen.service';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {


  lavadora: LavadoraImpl = new LavadoraImpl();
  televisor: TelevisorImpl = new TelevisorImpl();
  almacenes:Almacen[]=[];
  formulario:number = 0;

  private host:string = environment.host;
  private urlEndpoint:string = `${this.host}almacenes`


  constructor(
      private almacenService: AlmacenService,
      private productoService: ProductoService,
      private router: Router,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.cargarAlmacen();
    this.lavadora.almacen=`${this.urlEndpoint}/${id}`;
    this.televisor.almacen=`${this.urlEndpoint}/${id}`;
  }

  cargarAlmacen(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onAddLavadora(): void {
    this.productoService.addLavadora(this.lavadora).subscribe();
    let id: string = this.cargarAlmacen();
    this.router.navigate([`/almacenes/editar/${id}`]);
  }

  onAddTelevisor(): void {
    this.productoService.addTelevisor(this.televisor).subscribe();
    let id: string = this.cargarAlmacen();
    this.router.navigate([`/almacenes/editar/${id}`]);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
