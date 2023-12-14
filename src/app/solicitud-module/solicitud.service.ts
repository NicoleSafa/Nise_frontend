import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Solicitud } from './solicitud';
import { Observable } from 'rxjs';
import { SolicitudDatos } from '../models/solicitudDatos';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private solicitudUsuarioURL: string;
  private listarSolicitudProtectora= "http://localhost:8080/solicitud/listaSolicitudProtectora"

  private solicitudURL = "http://localhost:8080/solicitud";

  constructor(private http: HttpClient, private router: Router) {
   this.solicitudUsuarioURL = 'http://localhost:8080/solicitudUsuario';
  }


  public save(solicitud: Solicitud){
    this.router.navigate(['/Inicio']);
    return this.http.post<Solicitud>(this.solicitudUsuarioURL, solicitud);
  }

  //LISTAR SIMPLE
    getSolicitudeList(): Observable<Solicitud[]>{
      return this.http.get<Solicitud[]>(`${this.solicitudURL}`)
    }



  getSolicitudByProtectora(): Observable<Solicitud[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', localStorage.getItem('id')!);
    const opciones = {
      params : parametros
    }
    return this.http.get<Solicitud[]>(`${this.listarSolicitudProtectora}`, opciones);
  }

  getSolicitudByProtectoraDatos(): Observable<SolicitudDatos[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', localStorage.getItem('id')!);
    const opciones = {
      params : parametros
    }
    return this.http.get<SolicitudDatos[]>(`${this.listarSolicitudProtectora}`, opciones);
  }


  //ONE BY ONE
  getSolicitudById(id: number): Observable<Solicitud>{
    return this.http.get<Solicitud>(`${this.solicitudURL}/${id}`);
  }

  getSolicitudByIdDatos(id: number): Observable<SolicitudDatos>{
    return this.http.get<SolicitudDatos>(`${this.solicitudURL}/${id}`);
  }

  //EDITAR Y DETAIL
  updateSolicitud(id: number, solicitud: Solicitud): Observable<Object>{
    return this.http.put(`${this.solicitudURL}/${id}`, solicitud);
  }

}
