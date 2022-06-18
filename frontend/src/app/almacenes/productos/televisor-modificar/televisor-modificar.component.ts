import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPencilAlt, faCirclePlus, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';
import { TelevisorImpl } from '../../models/televisor-impl';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-televisor-modificar',
  templateUrl: './televisor-modificar.component.html',
  styleUrls: ['./televisor-modificar.component.css']
})
export class TelevisorModificarComponent implements OnInit {

  televisor: TelevisorImpl = new TelevisorImpl();
  almacenes: Almacen[] = [];

  constructor(private productoService: ProductoService,
              private almacenService: AlmacenService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarTelevisor();
    this.productoService.getTelevisor(id).subscribe(res =>
      this.televisor = this.productoService.mapearTelevisor(res));
    this.almacenService.getAlmacenes().subscribe((response) =>
      this.almacenes = this.almacenService.extraerAlmacenes(response));
  }

  cargarTelevisor(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarTelevisor(): void {
    this.productoService.updateTelevisor(this.televisor).subscribe();
  }


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;

}
