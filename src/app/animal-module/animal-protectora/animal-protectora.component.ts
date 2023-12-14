import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-protectora',
  templateUrl: './animal-protectora.component.html',
  styleUrls: ['./animal-protectora.component.css']
})
export class AnimalProtectoraComponent {

  animales : Animal[];
  username : string;

  ngOnInit(): void {
    const user =  JSON.parse(localStorage.getItem('dato')!);
    this.username = user.username;
    this.getAnimal();
    //this.getMostraringresos();
    //this.getMostraradopcion();

  }

 constructor(private animalService: AnimalService, private router : Router){}


  public getAnimal(){
    this.animalService.getAnimalByProtectora().subscribe(data => {
      this.animales = data;
    });
  }

 public getMostraringresos(){
    this.animales.pop();
    this.animalService.getIngresos().subscribe(data => {
      this.animales = data;
    })

  }
  public getMostraradopcion(){
    this.animales.pop();
    this.animalService.getAdopcion().subscribe(data => {
      this.animales = data;
    })
  }

  deleteAnimal(id: number){
    this.animalService.deleteAnimal(id).subscribe(data => {
      console.log(data);
      this.getAnimal();
      this.gotoAnimalList();
    })
  }

  gotoAnimalList(): void {
    this.router.navigate(['/animal/animalProtectoras']);
  }


}
