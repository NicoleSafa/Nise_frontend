import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitud';
import { SolicitudService } from '../solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error } from 'jquery';
import { SolicitudDatos } from 'src/app/models/solicitudDatos';

@Component({
  selector: 'app-solicitud-detail-editar-modal',
  templateUrl: './solicitud-detail-editar-modal.component.html',
  styleUrls: ['./solicitud-detail-editar-modal.component.css']
})
export class SolicitudDetailEditarModalComponent implements OnInit{

  id: number;
  solicitud: Solicitud = new Solicitud();
  solicitudDatos: SolicitudDatos;

  constructor(private solicitudService: SolicitudService,
    private route: ActivatedRoute,
    private router: Router){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.solicitudService.getSolicitudByIdDatos(this.id).subscribe(solicitudDatos => {
      this.solicitudDatos = solicitudDatos;
    });

    this.solicitudService.getSolicitudById(this.id).subscribe(data => {
      console.log('Respuesta del servidor:', data);
      this.solicitud = data;
      console.log('Animal DTO:', this.solicitud.animalDTO);
      console.log('Usuario DTO:', this.solicitud.usuarioDTO); // Verifica los datos de usuarioDTO
      console.log('Protectora DTO:', this.solicitud.protectoraDTO);

    }, error => console.log(error));
  }

  onSubmit(){
    this.solicitudService.updateSolicitud(this.id, this.solicitud).subscribe(data => {
      this.goToSolicitudList();
    }
    , error => console.log(error));
  }

  goToSolicitudList(){
    this.router.navigate(['/solicituds/solicitudProtectora']);
  }


}
