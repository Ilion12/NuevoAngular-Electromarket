import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TelevisorImpl } from '../../models/televisor-impl';

@Component({
  selector: 'app-televisores-consultar',
  templateUrl: './televisores-consultar.component.html',
  styleUrls: ['./televisores-consultar.component.css']
})
export class TelevisoresConsultarComponent implements OnInit {

  lupa = faMagnifyingGlass;
  fpencil = faPencil;
  trashC = faTrashCan;

  @Input() televisor: TelevisorImpl = new TelevisorImpl();
  @Output() televisorConsultar = new EventEmitter<TelevisorImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.televisorConsultar.emit(this.televisor);
  }

}
