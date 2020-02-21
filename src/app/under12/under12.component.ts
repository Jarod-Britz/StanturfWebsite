import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-under12',
  templateUrl: './under12.component.html',
  styleUrls: ['./under12.component.css']
})
export class Under12Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }


backClicked(){
  this.location.back();
}

}
