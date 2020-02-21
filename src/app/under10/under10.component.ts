import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-under10',
  templateUrl: './under10.component.html',
  styleUrls: ['./under10.component.css']
})
export class Under10Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
