import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-topteam',
  templateUrl: './topteam.component.html',
  styleUrls: ['./topteam.component.css']
})
export class TopteamComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
