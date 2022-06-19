import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Almacen } from '../models/almacen';
import { AlmacenImpl } from '../models/almacen-impl';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}almacenes`;


constructor(
    private http: HttpClient,
) { }

getId(url: string):string{
      let posicionFinal: number = url.lastIndexOf('/');
      let numId:string = url.slice(posicionFinal + 1, url.length);
      return numId;
    }


getAlmacenes(): Observable<any> {
  return this.http.get<any>(this.urlEndPoint);
  }

mapearAlmacen(almacenApi: any): AlmacenImpl {
  let almacen: Almacen = new AlmacenImpl();
  almacen.idAlmacen= this.getId(almacenApi._links.almacen.href);
  almacen.localidad= almacenApi.localidad;
  // almacen.urlAlmacen=almacenApi._links.almacen.href;
  return almacen;
}

extraerAlmacenes(respuestaApi: any): Almacen[] {
  const almacenes: Almacen[] = [];
  respuestaApi._embedded.almacenes.forEach((a: any) => {
  almacenes.push(this.mapearAlmacen(a));
  });
  return almacenes;
}

crearAlmacen(almacen: Almacen): Observable<any>{
  return this.http.post(`${this.urlEndPoint}`, almacen).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
      return throwError(()=> new Error(e));
    })
    );
}

deleteAlmacen(id: string): Observable<Almacen> {
  return this.http
    .delete<Almacen>(`${this.urlEndPoint}/${id}`).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
        return throwError(()=> new Error(e));
      })
    );
}


updateAlmacen(almacen:Almacen): Observable<any>{
  return this.http.patch<any>(`${this.urlEndPoint}/${almacen.idAlmacen}`, almacen).pipe(
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

getAlmacen(id:string): Observable<any>{
  return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
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


}
