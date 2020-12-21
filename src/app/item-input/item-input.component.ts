import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { forwardRef } from "@angular/core";

@Component({
  selector: 'app-input-item',
  template: `
    <input type="text"
      [(ngModel)]="inputValue"
      (ngModelChange)="inputValueChange.emit(inputValue)"
      (keydown)="handleKeyDown($event)"
      [disabled]="properties.get('UPDATE_ALLOWED') === false"
    />
  `,
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name: string;
  @Input() inputValue: string;
  @Input('InsertAllowed') set insertAllowed(value: string) {
    this.setProperty('INSERT_ALLOWED', value.toUpperCase() === "TRUE")
  }
  @Input('UpdateAllowed') set updateAllowed(value) {
    this.setProperty('UPDATE_ALLOWED', value.toUpperCase() === "TRUE")
  }
  @Output() whenValidateItem = new EventEmitter<string>();
  @Output() inputValueChange = new EventEmitter<string>();
  @Output() keyNextItem = new EventEmitter<string>();
  properties = new Map<string, any>();

  setProperty(propertyName: string, propertyValue: any) {
    const falsyAttributeValues = ['ATTR_OFF', 'PROPERTY_OFF']
    if(propertyValue.toUpperCase && falsyAttributeValues.includes(propertyValue.toUpperCase())) {
      propertyValue = false
    }
    this.properties.set(propertyName.toUpperCase(), propertyValue);
    console.log(this.name, this.properties)
  }

  async handleKeyDown(event) {
    console.log('keydown')
    if (event.key != 'Tab') {
      return;
    }
    this.whenValidateItem.emit();
    this.keyNextItem.emit();
  }
}
