import { Component, OnInit } from '@angular/core';
import {PlayerComponent} from '../player/player.component';
import { Coordinates } from '../../coordinates'

@Component({
  selector: 'app-player-ai',
  templateUrl: './player-ai.component.html',
  styleUrls: ['./player-ai.component.css']
})
export class PlayerAIComponent extends PlayerComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

  clickField(c:Coordinates){
    console.log('computer field is under fire', c);


  }

}
