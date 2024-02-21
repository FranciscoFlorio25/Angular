import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter : {{counter}}</h3>

    <button (click)="increaseby(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseby(1)">-1</button>
  `
})

export class CounterComponent {

  public counter:number = 10

  public increaseby(value: number):void{
    this.counter+= value
  }
  public decreaseby(value: number):void{

    this.counter <= 0 ?
    this.counter = 0 : this.counter-=value
  }

  public reset():void{
    this.counter = 10
  }
}
