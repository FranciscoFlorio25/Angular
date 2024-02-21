import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Personajes/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class DbzListComponent {
  @Input()
  public CharacterList: Character[] = [{name: 'Trunks',power:10}];
}
