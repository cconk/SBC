import { Component, OnInit } from '@angular/core';
import * as footballPlayerData from './footballPlayerData.json'
import * as basketballPlayerData from './basketballPlayerData.json'

@Component({
  selector: 'app-root',
  templateUrl: './homescreen.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'StartBenchCut';

  footballPlayers: any = (footballPlayerData as any).default;
  basketballPlayers: any = (basketballPlayerData as any).default;
  selectedFBPlayers : any =[];
  selectedBBPlayers : any =[];

  constructor() {}
  ngOnInit(): void {
    this.checkPlayerData();
    this.getRandomFBPlayers();
    this.getRandomBBPlayers();
  }
 

  checkPlayerData() {
    console.log(this.footballPlayers);
    console.log(this.basketballPlayers);
  }

  getRandomFBPlayers() {
    this.selectedFBPlayers = this.footballPlayers.sort(() => .5-Math.random()).slice(0,3);
    console.log('these are selected FB players', this.selectedFBPlayers);
  }

  getRandomBBPlayers() {
    this.selectedBBPlayers = this.basketballPlayers.sort(() => .5-Math.random()).slice(0,3);
    console.log('these are selected BB players', this.selectedBBPlayers);
  }
  
}
