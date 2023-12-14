import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudusuarioComponent } from './solicitudusuario.component';
import { SolicitudCrearComponent } from '../solicitud-module/solicitud-crear/solicitud-crear.component';
import { SolicitudusuarioCrearComponent } from './solicitudusuario-crear/solicitudusuario-crear.component';
import { SolicitudusuarioListarComponent } from './solicitudusuario-listar/solicitudusuario-listar.component';
import { SolicitudusuarioDetailEditarComponent } from './solicitudusuario-detail-editar/solicitudusuario-detail-editar.component';
import { SolicitudusuarioPerfilListarComponent } from './solicitudusuario-perfil-listar/solicitudusuario-perfil-listar.component';



const routes: Routes = [
  {
    path: 'solicitudusuario', component: SolicitudusuarioComponent, children:[
      {path: 'solicitudusuario/:id', component: SolicitudusuarioCrearComponent},
      {path: 'crear', component: SolicitudusuarioCrearComponent},
      {path: 'listar', component: SolicitudusuarioListarComponent},
      {path: 'editar', component: SolicitudusuarioDetailEditarComponent},
      {path: 'listar/solicitud-details/:id', component: SolicitudusuarioDetailEditarComponent},
      {path: 'peticiones', component: SolicitudusuarioPerfilListarComponent}
    ],
    
    
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudusuarioRoutingModule { } 