import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuario.component';
import { UsuariosListarComponent } from './usuarios-listar/usuarios-listar.component';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import {UsuariosUpdateComponent} from "./usuarios-update/usuarios-update.component";
import { PerfilComponent } from './perfil/perfil.component';
import { AnimalUsuarioComponent } from './animal-usuario/animal-usuario.component';



const routes: Routes = [
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      {path: 'usuariosListar', component: UsuariosListarComponent},
      {path: 'usuariosListar/usuario-details/:id', component: UsuariosDetailComponent},
      {path: 'perfil/update-usuario/:id', component: UsuariosUpdateComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'perfil/animalCrear', component: AnimalUsuarioComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { } //esto hay que cambiarlo
