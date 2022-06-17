import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAdd, faEraser, faMagnifyingGlass, faPencilAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';


@Component({
  selector: 'app-almacen-item',
  templateUrl: './almacen-item.component.html',
  styleUrls: ['./almacen-item.component.css']
})
export class AlmacenItemComponent implements OnInit {

  @Output() almacenResultado = new EventEmitter<Almacen>();
  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input() almacen: Almacen = new AlmacenImpl ();
  @Output() almacenConsultar = new EventEmitter<AlmacenImpl>();
  @Output() almacenEditar = new EventEmitter<Almacen>();
  @Output() almacenEliminar = new EventEmitter<AlmacenImpl>();

  constructor() { }

  ngOnInit(): void {
  }


  eliminar(): void {
    if (confirm('¿Está seguro? Se borrará el almacen y todo su contenido')){
      this.almacenEliminar.emit(this.almacen);
    }
  }


  consultar():void{
    this.almacenConsultar.emit(this.almacen);

  }

  editar(): void{
    this.almacenEditar.emit(this.almacen);
  }


  pencil=faPencilAlt;
  lupa=faMagnifyingGlass;
  trash=faTrashCan;
  eraser= faEraser;
  plus=faAdd;


}
