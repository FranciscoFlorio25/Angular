import { Component } from '@angular/core';

import { Character } from '../../interfaces/Personajes/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class DbzAddCharacterComponent {

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter (name:string,power:number):boolean{


    return true;
  }
}
