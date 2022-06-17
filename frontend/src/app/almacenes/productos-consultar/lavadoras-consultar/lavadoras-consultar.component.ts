import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { LavadoraImpl } from '../../models/lavadora-impl';

@Component({
  selector: 'app-lavadoras-consultar',
  templateUrl: './lavadoras-consultar.component.html',
  styleUrls: ['./lavadoras-consultar.component.css']
})
export class LavadorasConsultarComponent implements OnInit {

  lupa = faMagnifyingGlass;
  fpencil = faPencil;
  trashC = faTrashCan;

  @Input() lavadora: LavadoraImpl = new LavadoraImpl();
  @Output() lavadoraConsultar = new EventEmitter<LavadoraImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.lavadoraConsultar.emit(this.lavadora);
  }


}
