import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelevisorImpl } from '../../models/televisor-impl';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-televisores-consultar-form',
  templateUrl: './televisores-consultar-form.component.html',
  styleUrls: ['./televisores-consultar-form.component.css']
})
export class TelevisoresConsultarFormComponent implements OnInit {

  televisor: TelevisorImpl = new TelevisorImpl();

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarTelevisor();
    this.productoService.getTelevisor(id).subscribe(response =>
      this.televisor = this.productoService.mapearTelevisor(response));
  }

  cargarTelevisor(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
