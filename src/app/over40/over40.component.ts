import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-over40',
  templateUrl: './over40.component.html',
  styleUrls: ['./over40.component.css']
})
export class Over40Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
