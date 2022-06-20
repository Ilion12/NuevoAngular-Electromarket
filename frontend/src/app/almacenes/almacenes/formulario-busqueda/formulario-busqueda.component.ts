import { Component, Input, OnInit, Output } from '@angular/core';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';
import { Electrodomestico } from '../../models/electrodomestico';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';
import { Televisor } from '../../models/televisor';
import { TelevisorImpl } from '../../models/televisor-impl';
import { AlmacenService } from '../../service/almacen.service';

@Component({
  selector: 'app-formulario-busqueda',
  templateUrl: './formulario-busqueda.component.html',
  styleUrls: ['./formulario-busqueda.component.css']
})
export class FormularioBusquedaComponent implements OnInit {

  @Input() almacen: Almacen= new AlmacenImpl();
  almacenes: Almacen[] = [];
  almacenVerDatos: Almacen = new AlmacenImpl();
  marca: string='';
  numeroPulgadas:number=0;

  constructor(
    private almacenService: AlmacenService,
   ) { }

  ngOnInit(): void {

  }

  almacenesBuscados(marca:string, numeroPulgadas:number){
    this.almacenService.getAlmacenesBuscados(marca,numeroPulgadas).subscribe(response => {
      this.almacenes = this.almacenService.extraerAlmacenesMetodo(response)
    });
  }

  verDatos(almacen: Almacen): void {
    this.almacenVerDatos = almacen;
  }

}
