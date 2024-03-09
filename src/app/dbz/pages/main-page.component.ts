import { Component } from '@angular/core';
import { Character } from '../interfaces/Personajes/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPage  {
  constructor(private DbzService: DbzService){}

  get characters(): Character[]{
      return [...this.DbzService.Character]
  }

  OnDeleteCharacter(id: string):void{
    this.DbzService.deleteCharacterById(id)
  }

OnNewCharacter(Character:Character):void{
  this.DbzService.onNewCharacter(Character)
}

}
