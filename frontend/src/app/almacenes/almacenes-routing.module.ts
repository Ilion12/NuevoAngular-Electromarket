import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenConsultarComponent } from './almacenes/almacen-consultar/almacen-consultar.component';
import { AlmacenFormComponent } from './almacenes/almacen-form/almacen-form.component';
import { AlmacenModificarComponent } from './almacenes/almacen-modificar/almacen-modificar.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { FormularioBusquedaComponent } from './almacenes/formulario-busqueda/formulario-busqueda.component';
import { LavadorasConsultarFormComponent } from './productos-consultar/lavadoras-consultar-form/lavadoras-consultar-form.component';
import { TelevisoresConsultarFormComponent } from './productos-consultar/televisores-consultar-form/televisores-consultar-form.component';
import { LavadoraModificarComponent } from './productos/lavadora-modificar/lavadora-modificar.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { TelevisorModificarComponent } from './productos/televisor-modificar/televisor-modificar.component';

const routes: Routes = [ {
  path: '',
  component: AlmacenesComponent
},
{
  path: 'formulario-almacen',
  component: AlmacenFormComponent
},
{
  path: 'editar/:id',
  component: AlmacenModificarComponent
},
{
  path: 'editar/:id/formularioProducto',
  component: ProductosFormComponent
},
{
  path: 'consultar/:id',
  component: AlmacenConsultarComponent
},
{
  path: 'lavadoras/consultar/:id',
  component: LavadorasConsultarFormComponent
},
{
  path: 'televisores/consultar/:id',
  component: TelevisoresConsultarFormComponent
},
{
  path: 'lavadoras/editar/:id',
  component: LavadoraModificarComponent
},
{
  path: 'televisores/editar/:id',
  component: TelevisorModificarComponent
},
{
  path: 'formulario-busqueda',
  component: FormularioBusquedaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenesRoutingModule { }
