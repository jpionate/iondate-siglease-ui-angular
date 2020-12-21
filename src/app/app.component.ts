import { Component } from '@angular/core';
import { MENU_ITEMS } from './constants/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appitems = MENU_ITEMS;
}
