import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string[] = ['Spiderman','Ironman','Hulk', 'She Hulk']
  public heroDeleted?: string = '';
  public heroAdded?: string= '';
  borrarHeroe(): void {
    this.heroDeleted=this.heroName.pop();
  }
  agregarHeroe(heroname:string): void {
    this.heroName.push(heroname);
    this.heroAdded = heroname;
  }


}
