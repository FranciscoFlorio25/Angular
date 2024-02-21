import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { DbzAddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPage,
    DbzListComponent,
    DbzAddCharacterComponent
  ],
  exports: [MainPage],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
