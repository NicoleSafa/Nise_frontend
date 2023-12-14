import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudusuarioComponent } from './solicitudusuario.component'; //para los formularios
import { SolicitudusuarioRoutingModule } from './solicitudusuario-routing.module';
import { SolicitudusuarioCrearComponent } from './solicitudusuario-crear/solicitudusuario-crear.component';
import { SolicitudusuarioListarComponent } from './solicitudusuario-listar/solicitudusuario-listar.component';
import { SolicitudusuarioDetailEditarComponent } from './solicitudusuario-detail-editar/solicitudusuario-detail-editar.component';


@NgModule({
  declarations: [
    SolicitudusuarioComponent,
    SolicitudusuarioCrearComponent,
    SolicitudusuarioListarComponent,
    SolicitudusuarioDetailEditarComponent
  ],
  imports: [
    SolicitudusuarioRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    SolicitudusuarioCrearComponent,
  ]

})
export class SolicitudusuarioModule{}
