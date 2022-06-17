import { Component, Input, OnInit } from '@angular/core';
import { faPencilAlt, faCirclePlus, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';
import { TelevisorImpl } from '../../models/televisor-impl';

@Component({
  selector: 'app-televisor-modificar',
  templateUrl: './televisor-modificar.component.html',
  styleUrls: ['./televisor-modificar.component.css']
})
export class TelevisorModificarComponent implements OnInit {
  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input() televisor!: TelevisorImpl;
  @Input() producto!: ElectrodomesticoImpl;


  constructor(
    private almacenService: AlmacenService,
  ) { }

  ngOnInit(): void {
    this.almacenService.getAlmacenes().subscribe((response) => {
    this.almacenes = this.almacenService.extraerAlmacenes(response);
});

this.getTodosAlmacenes();
  }

  getTodosAlmacenes(): void {
    this.almacenService.getAlmacenes().subscribe(r => {

            this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(r));
          });
  }

  // modificarTelevisor(televisor: TelevisorImpl): void {
  //   this.televisorService.patchTelevisor(televisor.getIdProducto(televisor.urlProducto), televisor).subscribe();
  // }


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;

}
