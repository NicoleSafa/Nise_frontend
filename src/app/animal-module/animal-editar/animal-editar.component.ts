import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-editar',
  templateUrl: './animal-editar.component.html',
  styleUrls: ['./animal-editar.component.css']
})

export class AnimalEditarComponent implements OnInit {

  id: number;
  animal: Animal = new Animal();

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.animalService.getAnimalById(this.id).subscribe(
        (data: Animal) => {
          this.animal = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }

    onSubmit(): void {
      this.animalService.updateAnimal(this.id, this.animal).subscribe(
        (data: any) => {
          this.gotoAnimalList();
        },
        (error: any) => {
          console.error(error);
        }
      );
    }

    gotoAnimalList(): void {
      this.router.navigate(['/animal/animalProtectoras']);
    }

}
