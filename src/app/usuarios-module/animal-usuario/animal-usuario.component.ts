import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Animal } from '../animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-usuario',
  templateUrl: './animal-usuario.component.html',
  styleUrls: ['./animal-usuario.component.css']
})
export class AnimalUsuarioComponent {

  animal: Animal = {id: 0,
    nombre:' ',
    descripcion: ' ',
    raza: ' ',
    edad: 0,
    disponibilidad: true,
    chip: false,
    tipoAnimal: '',
    tipoSexo: '',
    tipoTamanyo: '',
    fechaEntradaProtectora: '',
    imagenUrl: ''};
imagenSeleccionada: File;

constructor(private animalService: UsuarioService,
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
this.gotoInicio();
},
error => {
console.log('Mascota añadida correctamente', error);
this.gotoInicio();
}
);
} else{
console.error('El objeto mascota o la imagen seleccionada no están definidas');
}
}

ngOnInit(): void {

}

gotoInicio(){
  this.router.navigate(['/Inicio'])
}

onSubmit(){
console.log(this.animal);
this.saveAnimal();
}

}
