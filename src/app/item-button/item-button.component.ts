import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-item',
  template: `
    <input type="button" (keydown)="handleClick($event)" [value]="value"/>
  `,
  providers: [],
  styleUrls: ['./item-button.component.css']
})
export class ItemButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() value: string;

  handleClick(event) {

  }
}
