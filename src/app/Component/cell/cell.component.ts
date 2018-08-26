import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

import { Coordinates } from '../../coordinates'

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  
  @Input() Coordinates:Coordinates;
  @Output() clickCell = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //this.Coorinates = new Coordinates(this.x, this.y)
  }

  change() {
    this.clickCell.emit(this.Coordinates);
  }



}
