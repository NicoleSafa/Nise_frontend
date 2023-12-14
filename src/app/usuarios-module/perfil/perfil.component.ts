import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Usuariodatos } from '../usuariodatos';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Protectora } from '../protectora';
import {Animal} from "../../animal-module/animal";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  rol: any;
  username: string;
  protectoras: Protectora;
  usuariodatos: Usuariodatos[];
  id: number;
  animalesdonados: Animal[];
  animalesAdoptados: Animal[];

  constructor(private usuarioService: UsuarioService,
    private router: Router){}

  ngOnInit(): void {
   const user = JSON.parse(localStorage.getItem('dato')!);
   this.username = user.username;
   this.rol= user.rol;

   if(this.rol === 'USUARIO' || this.rol === 'ADMIN'){
     this.perfil();

   }else{
    this.protectoraPerfil();
   }

  }

 private perfil(){
    this.usuarioService.getPerfil(this.username)
    .subscribe(data => {
     this.usuariodatos= data;
      this.id = this.usuariodatos[0].id
      this.usuarioService.getanimalesdonandos(this.id).subscribe(
        data =>{
          this.animalesdonados = data;
          this.usuarioService.getanimalesAdoptadosPerfil(this.id).subscribe(
            data =>{
              this.animalesAdoptados = data;
            })
        })
      localStorage.setItem('id', JSON.stringify(this.usuariodatos[0].id));
    })
 }
 private protectoraPerfil(){
  this.usuarioService.getProtectoraUsername(this.username)
  .subscribe(data => {
    this.protectoras = data;
  })
}


}
