import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudService } from '../solicitud.service';
import { Usuario } from 'src/app/inicio/usuario';
import { UsuarioService } from 'src/app/usuarios-module/usuario.service';
import { data, param } from 'jquery';
import { AnimalService } from 'src/app/animal-module/animal.service';
import { ActivatedRoute } from '@angular/router';
import { ProtectoraService } from 'src/app/protectoras-module/protectora.service';

@Component({
  selector: 'app-solicitud-crear',
  templateUrl: './solicitud-crear.component.html',
  styleUrls: ['./solicitud-crear.component.css']
})
export class SolicitudCrearComponent implements OnInit{

  solicitudForm: FormGroup;
  usuarioLogueado: Usuario;
  username: string;
  animalId: number; //tengo que ver como recupero este id
  protectoraId: number;

  constructor(
    private formBuilder: FormBuilder,
    private solicitudService: SolicitudService,
    private usuarioService: UsuarioService,
    private animalService: AnimalService,
    private protectoraService: ProtectoraService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ){}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;

    //AQUI BUSCO COMO CONSEGUIR EL ID DEL ANIMAL Q LE HE PASADO PREVIAMENTE
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id')
        if(idParam !== null){
          this.animalId = +idParam;

          this.protectoraService.getProtectoraByAnimalId(this.animalId).subscribe(data => {
            this.protectoraId = data.id;
            this.solicitudForm.get('protectoraDTO')?.setValue({ id: this.protectoraId});

            this.usuarioService.getUsuariobyUsername(this.username).subscribe(data => {
              this.usuarioLogueado = data;
              this.solicitudForm.get('usuarioDTO')?.setValue(data);

          });

          this.animalService.getAnimalById(this.animalId).subscribe(animal => {
            this.solicitudForm.get('animalDTO')?.setValue(animal);
        });
      });
    }
  });


    this.solicitudForm = this.formBuilder.group({
      estadoSolicitud: 'PENDIENTE',
      motivo: '',
      tituloMotivo: '',
      animalDTO: [],
      usuarioDTO: [],
      protectoraDTO: []
    });

  }


  onSubmit(){
    const solicitudData = this.solicitudForm.value;
    console.log(solicitudData);

    this.solicitudService.save(solicitudData).subscribe(result => {
      console.log('Solicitud enviada', result);


      // Aquí cierra el modal después de enviar la solicitud
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      const modalContainer = document.getElementsByClassName('modal')[0];

      if (modalBackdrop) {
          this.renderer.removeChild(document.body, modalBackdrop);
      }

      if (modalContainer) {
          this.renderer.removeChild(document.body, modalContainer);
      }

    });
  }

}
