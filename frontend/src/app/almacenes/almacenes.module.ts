import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenesRoutingModule } from './almacenes-routing.module';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { AlmacenConsultarComponent } from './almacenes/almacen-consultar/almacen-consultar.component';
import { AlmacenFormComponent } from './almacenes/almacen-form/almacen-form.component';
import { AlmacenItemComponent } from './almacenes/almacen-item/almacen-item.component';
import { AlmacenModificarComponent } from './almacenes/almacen-modificar/almacen-modificar.component';
import { ProductosComponent } from './productos/productos.component';
import { LavadoraItemComponent } from './productos/lavadora-item/lavadora-item.component';
import { LavadoraModificarComponent } from './productos/lavadora-modificar/lavadora-modificar.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { TelevisorItemComponent } from './productos/televisor-item/televisor-item.component';
import { TelevisorModificarComponent } from './productos/televisor-modificar/televisor-modificar.component';
import { ProductosConsultarComponent } from './productos-consultar/productos-consultar.component';
import { LavadorasConsultarComponent } from './productos-consultar/lavadoras-consultar/lavadoras-consultar.component';
import { LavadorasConsultarFormComponent } from './productos-consultar/lavadoras-consultar-form/lavadoras-consultar-form.component';
import { TelevisoresConsultarComponent } from './productos-consultar/televisores-consultar/televisores-consultar.component';
import { TelevisoresConsultarFormComponent } from './productos-consultar/televisores-consultar-form/televisores-consultar-form.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioBusquedaComponent } from './almacenes/formulario-busqueda/formulario-busqueda.component';
import { AlmacenesBuscadosComponent } from './almacenes/almacenes-buscados/almacenes-buscados.component';


@NgModule({
  declarations: [
    AlmacenesComponent,
    AlmacenConsultarComponent,
    AlmacenFormComponent,
    AlmacenItemComponent,
    AlmacenModificarComponent,
    ProductosComponent,
    LavadoraItemComponent,
    LavadoraModificarComponent,
    ProductosFormComponent,
    TelevisorItemComponent,
    TelevisorModificarComponent,
    ProductosConsultarComponent,
    LavadorasConsultarComponent,
    LavadorasConsultarFormComponent,
    TelevisoresConsultarComponent,
    TelevisoresConsultarFormComponent,
    FormularioBusquedaComponent,
    AlmacenesBuscadosComponent,
  ],
  imports: [
    CommonModule,
    AlmacenesRoutingModule, FormsModule,
    FontAwesomeModule
  ],
  providers:[],
  exports:[]
})
export class AlmacenesModule { }
