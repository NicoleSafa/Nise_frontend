import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/inicio/usuario';
import { SolicitudusuarioService } from '../solicitudusuario.service';
import { UsuarioService } from 'src/app/usuarios-module/usuario.service';
import { AnimalService } from 'src/app/animal-module/animal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-solicitudusuario-crear',
  templateUrl: './solicitudusuario-crear.component.html',
  styleUrls: ['./solicitudusuario-crear.component.css']
})
export class SolicitudusuarioCrearComponent implements OnInit{
  solicitudUsuarioForm: FormGroup;
  usuarioLogueado: Usuario;
  username: string;
  animalId: number;
  ofertanteId: number;

  constructor(
    private formBuilder: FormBuilder,
    private solicitudUsuarioService: SolicitudusuarioService,
    private usuarioService: UsuarioService,
    private animalService: AnimalService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.solicitudUsuarioForm = this.formBuilder.group({
      estadoSolicitud: 'PENDIENTE',
      motivo: '',
      tituloMotivo: '',
      animalDTO: [],
      adoptanteDTO: [],
      ofertanteDTO: []
    });   
    let user = JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id')
      if(idParam !== null){
        this.animalId = +idParam;

        this.usuarioService.getUsuarioByAnimalId(this.animalId).subscribe(data =>{
          this.ofertanteId = data.id;
          this.solicitudUsuarioForm.get('ofertanteDTO')?.setValue({id: this.ofertanteId});

        this.usuarioService.getUsuariobyUsername(this.username).subscribe(data1 => {
          this.usuarioLogueado = data1;
          this.solicitudUsuarioForm.get('adoptanteDTO')?.setValue(data1);
        });

        this.animalService.getAnimalById(this.animalId).subscribe(animal => {
          this.solicitudUsuarioForm.get('animalDTO')?.setValue(animal);
        });
      });
    }
  });

    
  }

    onSubmit(){
    const solicitudusuarioData = this.solicitudUsuarioForm.value;
    console.log(solicitudusuarioData);

    this.solicitudUsuarioService.save(solicitudusuarioData).subscribe(result => {
      console.log('Solicitud enviada', result);
    });
  }
}
