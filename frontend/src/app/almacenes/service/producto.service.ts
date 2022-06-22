import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LavadoraImpl } from '../models/lavadora-impl';
import { TelevisorImpl } from '../models/televisor-impl';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}almacenes`;
  private urlEndPointLav: string = `${this.host}lavadoras`;
  private urlEndPointTel: string = `${this.host}televisores`;


  constructor(
    private http: HttpClient,
    ) { }


  getProductosAlmacenados(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${id}/electrodomesticos`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  mapearLavadora(lavadoraApi: any): LavadoraImpl {

    let lavadoraNueva: LavadoraImpl = new LavadoraImpl();

    // lavadoraNueva.almacen=lavadoraApi._links.almacen.href;
    lavadoraNueva.calificacionEnergetica=lavadoraApi.calificacionEnergetica;
    lavadoraNueva.capacidadCarga= lavadoraApi.capacidadCarga;
    lavadoraNueva.marca= lavadoraApi.marca;
    lavadoraNueva.modelo= lavadoraApi.modelo;
    lavadoraNueva.precio= lavadoraApi.precio;
    // lavadoraNueva.urlProducto=lavadoraApi._links.self.href;
    lavadoraNueva.idProducto=this.getId(lavadoraApi._links.lavadora.href);
    return lavadoraNueva;
  }

  extraerLavadoras(respuestaApi: any): LavadoraImpl[]{
    const lavadoras: (LavadoraImpl[]) = [];
    let respuesta: any = respuestaApi._embedded.lavadoras;
    if(respuesta === undefined) {
      console.info('No hay lavadoras en este almacen');
    }
    else {respuestaApi._embedded.lavadoras.forEach((p: any) => {
      lavadoras.push(this.mapearLavadora(p));
    });}
    return lavadoras;
  }

   //post
   addLavadora(lavadora: LavadoraImpl): Observable <any>{
    return this.http.post(this.urlEndPointLav, lavadora).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  //delete
  deleteLavadora(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointLav}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }
//patch
  updateLavadora(lavadora: LavadoraImpl){
    return this.http.patch<any>(`${this.urlEndPointLav}/${lavadora.idProducto}`, lavadora).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  //get

  getLavadora(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointLav}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }



  mapearTelevisor(televisorApi: any): TelevisorImpl {

    let televisorNuevo = new TelevisorImpl();

    televisorNuevo.calificacionEnergetica= televisorApi.calificacionEnergetica;
    televisorNuevo.marca= televisorApi.marca;
    televisorNuevo.modelo= televisorApi.modelo;
    televisorNuevo.precio= televisorApi.precio;
    televisorNuevo.numeroPulgadas=televisorApi.numeroPulgadas;
    televisorNuevo.idProducto=this.getId(televisorApi._links.televisor.href);
    return televisorNuevo;

  }

  extraerTelevisores(respuestaApi: any): TelevisorImpl[] {
    const televisores: TelevisorImpl[] = [];
    let respuesta: any= respuestaApi._embedded.televisores;
    if(respuesta===undefined){
      console.info('No existen televisores en este almacén');
    }
    else{
    respuestaApi._embedded.televisores.forEach((p: any) => {
      televisores.push(this.mapearTelevisor(p));
    });}
    return televisores;
  }

   //post televisor
   addTelevisor(televisor: TelevisorImpl): Observable <any>{
    return this.http.post(this.urlEndPointTel, televisor).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  //delete televisor
  deleteTelevisor(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointTel}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }
//patch televisor
  updateTelevisor(televisor: TelevisorImpl){
    return this.http.patch<any>(`${this.urlEndPointTel}/${televisor.idProducto}`, televisor).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  getTelevisor(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointTel}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }



  // getProductosPagina(pagina: number): Observable<any> {
  //   return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  // }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}
