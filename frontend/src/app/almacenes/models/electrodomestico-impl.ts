import { Electrodomestico } from "./electrodomestico";

export class ElectrodomesticoImpl implements Electrodomestico{

  almacen!: string;
  // tipoProducto: string = '';
  marca: string = '';
  modelo: string = '';
  calificacionEnergetica: string = '';
  precio: number = 0;
  idProducto: string= '';
  urlProducto: string= '';

  constructor(){
  }

}
