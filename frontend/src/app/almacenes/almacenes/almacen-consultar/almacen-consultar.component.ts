import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';
import { AlmacenService } from '../../service/almacen.service';

@Component({
  selector: 'app-almacen-consultar',
  templateUrl: './almacen-consultar.component.html',
  styleUrls: ['./almacen-consultar.component.css']
})
export class AlmacenConsultarComponent implements OnInit {

  almacen: Almacen = new AlmacenImpl();

  constructor(private almacenService: AlmacenService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarAlmacen();
    this.almacenService.getAlmacen(id).subscribe(response =>
       this.almacen=this.almacenService.mapearAlmacen(response));
  }

  cargarAlmacen(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
