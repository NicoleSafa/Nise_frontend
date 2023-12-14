import { Component, OnInit } from '@angular/core';
import { SolicitudusuarioService } from '../solicitudusuario.service';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Solicitudusuario } from '../solicitudusuario';

@Component({
  selector: 'app-solicitudusuario-listar',
  templateUrl: './solicitudusuario-listar.component.html',
  styleUrls: ['./solicitudusuario-listar.component.css']
})
export class SolicitudusuarioListarComponent implements OnInit{

  solicitudusuarios: Solicitudusuario[];
  username: string;

  constructor(private solicitudusuarioService: SolicitudusuarioService){}

    ngOnInit(): void {
      const user = JSON.parse(localStorage.getItem('dato')!);
      this.username = user.username; 
      this.getSolicitudusuarios();
    }

    private getSolicitudusuarios(){
      this.solicitudusuarioService.getSolicitudByUsuario().subscribe(data => {
        this.solicitudusuarios = data;
      });
    }

}
