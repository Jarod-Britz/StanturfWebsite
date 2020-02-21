import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-firstteam',
  templateUrl: './firstteam.component.html',
  styleUrls: ['./firstteam.component.css']
})
export class FirstteamComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
