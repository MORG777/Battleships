import { Component, OnInit, Input } from '@angular/core';
import { Coordinates } from '../../coordinates'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  @Input() name:string;

  

  constructor() { console.log('player'); }

  ngOnInit() {
  }

  clickField(c:Coordinates){
    console.log('player field is under fire', c);


  }

}
