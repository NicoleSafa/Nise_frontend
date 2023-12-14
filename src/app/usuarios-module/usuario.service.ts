import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Usuariodatos } from './usuariodatos';
import { Protectora } from './protectora';
import { Animal } from './animal';
import {Vacuna} from "../vacunas-module/vacuna";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  private usuarioURL= "http://localhost:8080/usuario";
  private usernamesURL= "http://localhost:8080/usuario/username";
  private perfilURL= "http://localhost:8080/usuario/perfil";
  private usernamesProtectorasURL= "http://localhost:8080/protectora/username";
  private animalURL= "http://localhost:8080/animal";
  private usuarioDetailUrl= "http://localhost:8080/usuario/details";
  private usuarioDonados= "http://localhost:8080/animal/perfil/donados";
  private usuarioAdoptados= "http://localhost:8080/animal/perfil/adoptados";

  //LISTAR
  getUsuarioList(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }


  //LISTAR ONE BY ONE -- DETAIL
  getUsuarioById(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usuarioURL}/${id}`);
  }
  getUsuarioPerfilById(id: number): Observable<Usuariodatos>{
    return this.httpClient.get<Usuariodatos>(`${this.usuarioDetailUrl}/${id}`);
  }
  getUsuariobyUsername(username: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usernamesURL}/${username}`);
  }

  getPerfil(username: string): Observable<Usuariodatos[]>{
    return this.httpClient.get<Usuariodatos[]>(`${this.perfilURL}/${username}`);
  }

  getProtectoraUsername(username: string): Observable<Protectora>{
    return this.httpClient.get<Protectora>(`${this.usernamesProtectorasURL}/${username}`);
  }

  updatePerfil(id: number, usuariodatos: Usuariodatos): Observable<Object>{
    return this.httpClient.put(`${this.usuarioURL}/${id}`, usuariodatos);
  }

  getanimalesdonandos(id:number) : Observable<Animal[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', id);
    const opciones = {
      params : parametros
    }
    return this.httpClient.get<Animal[]>(`${this.usuarioDonados}`, opciones);
  }
  getanimalesAdoptadosPerfil(id:number) : Observable<Animal[]>{
    let parametros = new HttpParams();
    parametros = parametros.append('id', id);
    const opciones = {
      params : parametros
    }
    return this.httpClient.get<Animal[]>(`${this.usuarioAdoptados}`, opciones);
  }

  //CREAR
  createAnimal(animal: Animal, imagen: File): Observable<any>{
    const formData = new FormData();

    const animalToSend = {
      nombre: animal.nombre,
      descripcion: animal.descripcion,
      raza: animal.raza,
      edad: animal.edad,
      disponibilidad: animal.disponibilidad,
      chip: animal.chip,
      tipoAnimal: animal.tipoAnimal,
      tipoSexo: animal.tipoSexo,
      tipoTamanyo: animal.tipoTamanyo,
      fechaEntradaProtectora: animal.fechaEntradaProtectora
    };

    formData.append('imagen', imagen, imagen.name);

    const animalString = JSON.stringify(animalToSend);

    formData.append('animal', animalString);

    const gestionString = JSON.stringify(this.getUserData());

    formData.append('gestion', gestionString)

    const gestionRole = this.getUserRole();

    formData.append('rol', gestionRole)

    return this.httpClient.post(`${this.animalURL}`, formData);
  }

  getUserData(): number {
    const userDataID = JSON.parse(localStorage.getItem('id')!);
    console.log(userDataID);
    return userDataID;
  }

  getUserRole(): string {
    let userDataRole = JSON.parse(localStorage.getItem('dato')!);
    return userDataRole.rol;
  }
  getUsuarioByAnimalId(animalId: number): Observable<any>{
    return this.httpClient.get(`http://localhost:8080/animal/${animalId}/usuario`);
  }


  getUsuarioByOne(username: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usernamesURL}/user/${username}`);
  }

  //getUsuariobyUsername(username: string): Observable<Usuario>{
    //return this.httpClient.get<Usuario>(`${this.usernamesURL}/${username}`);
  //}

}
