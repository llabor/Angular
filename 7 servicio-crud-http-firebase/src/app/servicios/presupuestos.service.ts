import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx'; // to communicate with the web service

@Injectable()
export class PresupuestosService {

  // URL de la BD de Firebase y a la tabla/colección de presupuestos en formato JSON
  presURL = 'https://appcompras-79b3a.firebaseio.com/presupuestos.json';
  preURL = 'https://appcompras-79b3a.firebaseio.com/presupuestos';

  constructor(private http: Http) { }

  // Método para insertar presupuestos en la BD de Firebase
  postPresupuesto(presupuesto: any){
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    // map: método de JS
    // la respuesta recibida por 'post' la mostramos por consola en formato JSON
    // y además la devolvemos en formato JSON
    return this.http.post( this.presURL, newpres, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getPresupuestos() {
    return this.http.get( this.presURL )
        .map(
          res => res.json()
        );
  }

  getPresupuesto(id$: string) {
     const url = `${this.preURL}/${id$}.json`;
     return this.http.get(url)
        .map( res => res.json());
  }

  putPresupuesto(presupuesto: any, id$: string){
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.preURL}/${id$}.json`;

    return this.http.put( url, newpre, {headers})
        .map ( res => {
          console.log(res.json());
          return res.json();
        })

  }

  delPresupuesto ( id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete( url )
        .map ( res => res.json() );
  }

}
