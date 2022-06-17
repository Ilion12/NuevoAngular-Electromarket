import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faTrashCan, faEye, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { TelevisorImpl } from '../../models/televisor-impl';


@Component({
  selector: 'app-televisor-item',
  templateUrl: './televisor-item.component.html',
  styleUrls: ['./televisor-item.component.css']
})
export class TelevisorItemComponent implements OnInit {


  @Input() televisor: TelevisorImpl = new TelevisorImpl();
  @Output() televisorEliminar = new EventEmitter<TelevisorImpl>();
  @Output() televisorEditar= new EventEmitter<TelevisorImpl>();

  constructor() { }

  ngOnInit(): void {
    }


//delete
borrarTelevisor(): void {
  if (confirm(`¿Está seguro de que desea eliminar este producto?`)){
  this.televisorEliminar.emit(this.televisor);
}
}

//patch
modificarTelevisor(): void {
  this.televisorEditar.emit(this.televisor);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;


}
