import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';
import { data } from 'jquery';
import { Solicitud } from '../solicitud';
import { SolicitudDatos } from 'src/app/models/solicitudDatos';


@Component({
  selector: 'app-solicitud-protectora',
  templateUrl: './solicitud-protectora.component.html',
  styleUrls: ['./solicitud-protectora.component.css']
})
export class SolicitudProtectoraComponent implements OnInit{


  solicitudes: Solicitud[];
  username : string;
  solicitudDatos: SolicitudDatos[];


  constructor(private solicitudService: SolicitudService){}


  ngOnInit(): void {
    const user =  JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;
    this.getSolicitud();
    this.getSolicitudDatos();
  }


  private getSolicitud(){
    this.solicitudService.getSolicitudByProtectora().subscribe(data => {
      this.solicitudes = data;
    })
  }

  private getSolicitudDatos(){
    this.solicitudService.getSolicitudByProtectoraDatos().subscribe(data => {
      this.solicitudDatos = data;
    })
  }


}



