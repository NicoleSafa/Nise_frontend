import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Solicitudusuario } from './solicitudusuario';


@Injectable({
  providedIn: 'root'
})
export class SolicitudusuarioService {

  private solicitudesUsuarioURL : string;
  private listarSolicitudUsuario ="http://localhost:8080/solicitudesUsuario/listar";
  private solicitudUsuarioURL : "http://localhost:8080/solicitudesUsuario";

  constructor(private http: HttpClient, private router: Router) {
    this.solicitudesUsuarioURL = 'http://localhost:8080/nuevaSolicitudUsuario';
   }

   public save(solicitud: Solicitudusuario){
    this.router.navigate(['/Inicio']);
    return this.http.post<Solicitudusuario>(this.solicitudesUsuarioURL, solicitud);
  }

   getSolicitudByUsuario(): Observable<Solicitudusuario[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', localStorage.getItem('id')!);
    const opciones = {
      params : parametros
    }
    return this.http.get<Solicitudusuario[]>(`${this.listarSolicitudUsuario}`, opciones)
   }

   getSolicitudUsuarioById(id: number): Observable<Solicitudusuario>{
    return this.http.get<Solicitudusuario>(`${this.solicitudUsuarioURL}/${id}`);
   }

   //listar
   getsolicitudUsuarioList(): Observable<Solicitudusuario[]>{
    return this.http.get<Solicitudusuario[]>(`${this.listarSolicitudUsuario}`);
  }
  getUserData(): number {
    const userDataID = JSON.parse(localStorage.getItem('id')!);
    console.log(userDataID);
    return userDataID;
  }

  //editar
  updateSolicitudUsuario(id: number, solicitudusuario: Solicitudusuario): Observable<Object>{
    return this.http.put(`${this.listarSolicitudUsuario}/${id}`, solicitudusuario);
  }


}
