import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LavadoraImpl } from '../models/lavadora-impl';
import { TelevisorImpl } from '../models/televisor-impl';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  lavadoras: LavadoraImpl[] = [];
  televisores: TelevisorImpl[] = [];
  lavadoraVerDatos: LavadoraImpl = new LavadoraImpl();
  televisorVerDatos: TelevisorImpl = new TelevisorImpl();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private productoService: ProductoService) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
  this.productoService.getProductosAlmacenados(id).subscribe((res) =>
  this.lavadoras= this.productoService.extraerLavadoras(res));
  this.productoService.getProductosAlmacenados(id).subscribe((res) =>
  this.televisores = this.productoService.extraerTelevisores(res));
  }

  onLavadoraEliminar(lavadora: LavadoraImpl){
    this.productoService.deleteLavadora(lavadora.idProducto).subscribe();
  }

  onLavadoraEditar(lavadora: LavadoraImpl){
    this.lavadoraVerDatos = lavadora;
    let url = `almacenes/lavadoras/editar/${lavadora.idProducto}`;
    this.router.navigate([url])
  }

  onTelevisorEliminar(televisor: TelevisorImpl){
    this.productoService.deleteTelevisor(televisor.idProducto).subscribe();
  }

  onTelevisorEditar(televisor: TelevisorImpl){
    this.televisorVerDatos = televisor;
    let url = `almacenes/televisores/editar/${televisor.idProducto}`;
    this.router.navigate([url])
  }
}
