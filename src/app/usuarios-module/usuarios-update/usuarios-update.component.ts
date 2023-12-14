import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UsuarioService} from "../usuario.service";
import {Usuariodatos} from "../usuariodatos" ;


@Component({
  selector: 'app-usuarios-update',
  templateUrl: './usuarios-update.component.html',
  styleUrls: ['./usuarios-update.component.css']
})
export class UsuariosUpdateComponent implements OnInit{
  id:number;
  usuario: Usuariodatos = new Usuariodatos();
  constructor(private usuarioService: UsuarioService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuarioPerfilById(this.id).subscribe( data =>{
      this.usuario = data;
    }, error => console.log(error))

  }

  onSubmit(){
    this.usuarioService.updatePerfil(this.id, this.usuario).subscribe(data => {
        this.gotoUsuarioList();
      }
      , error => console.log(error));
  }

  gotoUsuarioList(){
    this.router.navigate(['/usuarios/perfil']);
  }



}
