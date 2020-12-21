import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  constructor() { }

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  ngOnInit() {
  }

  @Input() blockName: string;
  @Input() query: string;
  @Input() dataProvider;
  @Input() dataInterface;
  @Input() displayedColumns;
  @Output() queryExecutor = new EventEmitter();
  @Output() queryStarted = new EventEmitter();

  setData(data: any[]) {
    this.table.dataSource = data;
  }


}
