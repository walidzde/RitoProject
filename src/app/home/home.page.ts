import { Component, OnInit } from '@angular/core';
import { RiotService } from '../services/riot.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  region="";
  name="";
  result = {};


  constructor( private apiService : RiotService ) { }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.region);
    console.log(this.name);
    this.apiService.getSummonerBySummonerName(this.name , this.region).subscribe(
      (result) => {
        this.result = result ;
      }
    )
  }

}
