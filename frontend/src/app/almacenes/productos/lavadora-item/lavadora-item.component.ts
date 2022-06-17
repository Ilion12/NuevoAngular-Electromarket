import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { LavadoraImpl } from '../../models/lavadora-impl';

@Component({
  selector: 'app-lavadora-item',
  templateUrl: './lavadora-item.component.html',
  styleUrls: ['./lavadora-item.component.css']
})
export class LavadoraItemComponent implements OnInit {
  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input() lavadora: LavadoraImpl = new LavadoraImpl();
  @Output() lavadoraEliminar = new EventEmitter<LavadoraImpl>();
  @Output() lavadoraEditar= new EventEmitter<LavadoraImpl>();

  constructor() { }

  ngOnInit(): void {
    }


//delete
borrarLavadora(): void {
  if (confirm(`¿Está seguro de que desea eliminar este producto?`)){
  this.lavadoraEliminar.emit(this.lavadora);
}
}

//patch
modificarLavadora(): void {
  this.lavadoraEditar.emit(this.lavadora);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;


}
