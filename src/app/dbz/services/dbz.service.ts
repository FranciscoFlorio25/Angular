import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Personajes/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public Character:Character[] = [
    {
      id: uuid(),
      name:'Krillin',
      power:500
    },
    {
      id: uuid(),
      name:'Goku',
      power:9500
    },
    { id: uuid(),
      name:'Vegeta',
      power:7500
    }
  ];


  onNewCharacter(Character:Character):boolean {
    const newCharacter : Character=  {
      id: uuid(),
      ...Character
    };

    this.Character.push(newCharacter);

      return true;
  }

  deleteCharacterById(id : string):boolean {
    this.Character = this.Character.filter(character => character.id!== id);

    return true;
  }
}
