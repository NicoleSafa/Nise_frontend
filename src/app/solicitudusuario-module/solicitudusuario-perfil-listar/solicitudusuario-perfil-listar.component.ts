import { Component, OnInit } from '@angular/core';
import { SolicitudusuarioService } from '../solicitudusuario.service';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Solicitudusuario } from '../solicitudusuario';

@Component({
  selector: 'app-solicitudusuario-perfil-listar',
  templateUrl: './solicitudusuario-perfil-listar.component.html',
  styleUrls: ['./solicitudusuario-perfil-listar.component.css']
})
export class SolicitudusuarioPerfilListarComponent implements OnInit{

  solicitudusuarios1: Solicitudusuario[];
  username: string;

  constructor(private solicitudusuarioService: SolicitudusuarioService){}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('dato')!)
    this.username = user.username;
    this.getPeticiones();


  }
  private getPeticiones(){
    this.solicitudusuarioService.getSolicitudByUsuario2().subscribe(data =>{
      this.solicitudusuarios1 = data;
    });
  }

}
