import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coordinates } from '../../coordinates';




@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  public Cells:Array<Coordinates> = [];
  public fieldSize:number = 10;
  public fieldWidth: number;
  public cellWidth = 50;
  public columnHeader = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  public rowHeader = ['1','2','3','4','5','6','7','8','9','10'];

  @Output() clickField = new EventEmitter();

  constructor() { 
     
  }

  ngOnInit() {
    this.fieldWidth = this.fieldSize * this.cellWidth;
    for(let x=0; x<this.fieldSize; x++) {
      for(let y=0;y<this.fieldSize; y++){
        this.Cells.push( new Coordinates(x, y) );
      }
    }
  }

  clickCell(c:Coordinates){
    console.log('field click', c)
    this.clickField.emit(c);
  }

}
