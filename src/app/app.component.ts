import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grocery-list-app';
  shawValue =false;

  changeShowValue(){
    this.shawValue = !this.shawValue;
  }
}
