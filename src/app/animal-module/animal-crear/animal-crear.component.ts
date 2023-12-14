import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { data, error } from 'jquery';

@Component({
  selector: 'app-animal-crear',
  templateUrl: './animal-crear.component.html',
  styleUrls: ['./animal-crear.component.css']
})
export class AnimalCrearComponent implements OnInit{

  animal: Animal = {id: 0,
                    nombre:'',
                    descripcion: '',
                    raza: '',
                    edad: 0,
                    disponibilidad: true,
                    chip: false,
                    tipoAnimal: '',
                    tipoSexo: '',
                    tipoTamanyo: '',
                    fechaEntradaProtectora: '',
                    imagenUrl: ''};
  imagenSeleccionada: File;

  constructor(private animalService: AnimalService,
              private router: Router){}

  onImageSeleccionada(event: any): void {
    console.log('Se ha añadido o cambiado una imagen: ', event);
    this.imagenSeleccionada = event.target.files[0];
  }

  saveAnimal(): void{
    console.log('animal:', this.animal);
    console.log('imagenSeleccionada', this.imagenSeleccionada);

    if (this.animal && this.imagenSeleccionada) {
      this.animalService.createAnimal(this.animal, this.imagenSeleccionada).subscribe(
        () => {
          console.log('Mascota creada correctamente');
          this.gotoAnimalesList();
        },
        error => {
          console.log('Mascota añadida correctamente', error);
          this.gotoAnimalesList();
        }
      );
    } else{
      console.error('El objeto mascota o la imagen seleccionada no están definidas');
    }
  }

  ngOnInit(): void {

  }

  gotoAnimalesList(){
    this.router.navigate(['/animal/animalProtectoras'])
  }

  onSubmit(){
    console.log(this.animal);
    this.saveAnimal();
  }
}
