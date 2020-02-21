import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-under18',
  templateUrl: './under18.component.html',
  styleUrls: ['./under18.component.css']
})
export class Under18Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
