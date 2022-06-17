import { Almacen } from "src/app/almacenes/models/almacen";

export interface Electrodomestico {
  almacen:string;
  tipoProducto:string;
  marca: string;
  modelo: string;
  precio: number;
  idProducto: string;
  urlProducto: string;

}
