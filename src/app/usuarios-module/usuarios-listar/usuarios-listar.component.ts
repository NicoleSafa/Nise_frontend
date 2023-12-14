import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { loginDTO } from '../loginDTO';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { UsuarioDatos } from 'src/app/models/usuarioDatos';


@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit{

  usuarios: Usuario[];
  usuarioDatos: UsuarioDatos[];
  // loginDTO: loginDTO[];

  constructor(private usuarioService: UsuarioService,
    private router: Router){}

  ngOnInit(): void {
    this.getUsuarios();
    this.getUsuariosDatos();
  }

  private getUsuarios(){
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });
  }

  private getUsuariosDatos(){
    this.usuarioService.getUsuarioListDatos().subscribe(data => {
      this.usuarioDatos = data;
    });
  }

  usuarioDetail(id: number){
    this.router.navigate(['usuario-details', id]);
  }

}
