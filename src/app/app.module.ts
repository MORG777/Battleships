import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './Component/field/field.component';
import { CellComponent } from './Component/cell/cell.component';

import { PlayerComponent } from './Player/player/player.component';
import { PlayerAIComponent } from './Player/player-ai/player-ai.component';
import { ShipComponent } from './ship/ship.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { GarageComponent } from './garage/garage.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    PlayerComponent,
    PlayerAIComponent,
    ShipComponent,
    FooterComponent,
    HeaderComponent,
    GameComponent,
    FieldComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
