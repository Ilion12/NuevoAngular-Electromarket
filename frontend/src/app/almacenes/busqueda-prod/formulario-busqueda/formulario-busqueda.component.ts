import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelevisorImpl } from '../../models/televisor-impl';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-formulario-busqueda',
  templateUrl: './formulario-busqueda.component.html',
  styleUrls: ['./formulario-busqueda.component.css']
})
export class FormularioBusquedaComponent implements OnInit {

  televisor: TelevisorImpl= new TelevisorImpl();


  constructor(private productoService: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }


}
