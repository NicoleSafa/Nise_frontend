import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Solicitud } from './solicitud';
import { Observable } from 'rxjs';

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


  getSolicitudByProtectora(): Observable<Solicitud[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', localStorage.getItem('id')!);
    const opciones = {
      params : parametros
    }
    return this.http.get<Solicitud[]>(`${this.listarSolicitudProtectora}`, opciones);
  }

  //ONE BY ONE
  getSolicitudById(id: number): Observable<Solicitud>{
    return this.http.get<Solicitud>(`${this.solicitudURL}/${id}`);
  }

}
