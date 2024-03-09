import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Personajes/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class DbzListComponent {

  @Output()
  onCharacterDelete: EventEmitter<string>= new EventEmitter();

  @Input()
  public CharacterList: Character[] = [];

  onDeleteCharacter(id?:string): void {
    this.onCharacterDelete.emit(id)
  }
}
