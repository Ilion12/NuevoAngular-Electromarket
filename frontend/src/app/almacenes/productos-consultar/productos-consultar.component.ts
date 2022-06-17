import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LavadoraImpl } from '../models/lavadora-impl';
import { TelevisorImpl } from '../models/televisor-impl';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos-consultar',
  templateUrl: './productos-consultar.component.html',
  styleUrls: ['./productos-consultar.component.css']
})
export class ProductosConsultarComponent implements OnInit {

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
    this.lavadoras = this.productoService.extraerLavadoras(res));
    this.productoService.getProductosAlmacenados(id).subscribe((res) =>
    this.televisores = this.productoService.extraerTelevisores(res));
  }

  onLavadoraConsultar(lavadora: LavadoraImpl){
    this.verDatosLavadora(lavadora);
    let url = `almacenes/lavadoras/consultar/${lavadora.idProducto}`;
    this.router.navigate([url])
  }

  verDatosLavadora(lavadora: LavadoraImpl): void {
    this.lavadoraVerDatos = lavadora;
  }

  onTelevisorConsultar(televisor: TelevisorImpl){
    this.verDatosTelevisor(televisor);
    let url = `almacenes/televisores/consultar/${televisor.idProducto}`;
    this.router.navigate([url])
  }

  verDatosTelevisor(televisor: TelevisorImpl): void {
    this.televisorVerDatos = televisor;
  }

}
