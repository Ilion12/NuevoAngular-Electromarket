import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';
import { AlmacenService } from '../../service/almacen.service';

@Component({
  selector: 'app-almacen-modificar',
  templateUrl: './almacen-modificar.component.html',
  styleUrls: ['./almacen-modificar.component.css']
})
export class AlmacenModificarComponent implements OnInit {

    almacen: Almacen= new AlmacenImpl();

    todosAlmacenes: Almacen[]= [];

  constructor(
    private almacenService: AlmacenService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let id: string = this.cargarAlmacen();
    this.almacenService.getAlmacen(id).subscribe((response) =>{
      this.almacen = this.almacenService.mapearAlmacen(response);
    })
  }

cargarAlmacen(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

onEditarAlmacen(): void{
    this.almacenService.updateAlmacen(this.almacen).subscribe();
    this.router.navigate(['almacenes']);
  }

onProductoCrear(almacen: Almacen){
  this.verDatos(almacen);
  let url = `almacenes/editar/${almacen.idAlmacen}/formularioProducto`;
  this.router.navigate([url]);
}

verDatos(almacen: Almacen): void {
  this.almacen = almacen;
}
  // getTodosAlmacenes(): void {
  //   this.almacenService.getAlmacenes().subscribe(r =>{
  //           this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(r));
  //         });
  // }

  // modificarAlmacen(idAlmacen: string, almacen: AlmacenImpl): void{
  //   this.almacenService.patchAlmacen(idAlmacen,almacen).subscribe();
  // }
}
