import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCirclePlus, faPencilAlt, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { LavadoraImpl } from '../../models/lavadora-impl';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-lavadora-modificar',
  templateUrl: './lavadora-modificar.component.html',
  styleUrls: ['./lavadora-modificar.component.css']
})
export class LavadoraModificarComponent implements OnInit {



  lavadora: LavadoraImpl= new LavadoraImpl();
  almacenes: Almacen[]=[];


  constructor(
    private almacenService: AlmacenService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id: string = this.cargarLavadora();
    this.productoService.getLavadora(id).subscribe(response=>
      this.lavadora = this.productoService.mapearLavadora(response));
      this.almacenService.getAlmacenes().subscribe((r)=>
      this.almacenes=this.almacenService.extraerAlmacenes(r));
  }

  cargarLavadora(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onModificarLavadora(): void {
    this.productoService.updateLavadora(this.lavadora).subscribe();
  }


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;
}
