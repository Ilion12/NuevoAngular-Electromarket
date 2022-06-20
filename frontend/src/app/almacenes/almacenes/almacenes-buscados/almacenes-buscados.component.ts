import { Component, Input, OnInit } from '@angular/core';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';
import { AlmacenService } from '../../service/almacen.service';

@Component({
  selector: 'app-almacenes-buscados',
  templateUrl: './almacenes-buscados.component.html',
  styleUrls: ['./almacenes-buscados.component.css']
})
export class AlmacenesBuscadosComponent implements OnInit {

  @Input()almacen: Almacen=new AlmacenImpl();
  almacenes: Almacen[]= [];

  constructor(private almacenService: AlmacenService) { }

  ngOnInit(): void {
    this.almacenService.getAlmacenes().subscribe(response=>{
      this.almacenes = this.almacenService.extraerAlmacenes(response)
    })
  }

}
