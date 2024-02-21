import { Component } from '@angular/core';
import { Character } from '../interfaces/Personajes/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPage  {
  public Character:Character[] = [
    {name:'Krillin',power:500},
    {name:'Goku',power:9500},
    {name:'Vegeta',power:7500}];


  onNewCharacter(Character:Character):void {

    console.log("main page");
    console.log(Character);
  }
}
