import { Component, OnInit } from '@angular/core';
import { Solicitudusuario } from '../solicitudusuario';
import { Solicitud } from 'src/app/solicitud-module/solicitud';
import { SolicitudusuarioService } from '../solicitudusuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error } from 'jquery';

@Component({
  selector: 'app-solicitudusuario-detail-editar',
  templateUrl: './solicitudusuario-detail-editar.component.html',
  styleUrls: ['./solicitudusuario-detail-editar.component.css']
})
export class SolicitudusuarioDetailEditarComponent implements OnInit{
  id: number;
  solicitudusuario : Solicitudusuario = new Solicitudusuario();
  constructor(private solicitudusuarioService: SolicitudusuarioService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.solicitudusuarioService.getSolicitudUsuarioById(this.id).subscribe(data => {  
        console.log('Respuesta del servidor:', data); 
        this.solicitudusuario = data;
        console.log('Animal DTO:', this.solicitudusuario.animalDTO);
        console.log('Adoptante DTO:', this.solicitudusuario.adoptanteDTO); // Verifica los datos de usuarioDTO
        console.log('Ofertante DTO:', this.solicitudusuario.ofertanteDTO);
  
  
      }, error => console.log(error));
    }
  
    onSubmit(){
      this.solicitudusuarioService.updateSolicitudUsuario(this.id, this.solicitudusuario).subscribe(data => {
        this.goToSolicitudusuarioList();
      }
      , error => console.log(error));
    }
  
    goToSolicitudusuarioList(){
      this.router.navigate(['']);
    }// dejame subir

}
