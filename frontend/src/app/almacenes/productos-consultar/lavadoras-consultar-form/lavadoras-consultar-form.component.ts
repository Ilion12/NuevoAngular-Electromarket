import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LavadoraImpl } from '../../models/lavadora-impl';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-lavadoras-consultar-form',
  templateUrl: './lavadoras-consultar-form.component.html',
  styleUrls: ['./lavadoras-consultar-form.component.css']
})
export class LavadorasConsultarFormComponent implements OnInit {

  lavadora: LavadoraImpl = new LavadoraImpl();

  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarlavadora();
    this.productoService.getLavadora(id).subscribe(response =>
      this.lavadora = this.productoService.mapearLavadora(response));
  }


  cargarlavadora(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
