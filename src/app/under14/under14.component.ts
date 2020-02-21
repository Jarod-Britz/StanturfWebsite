import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-under14',
  templateUrl: './under14.component.html',
  styleUrls: ['./under14.component.css']
})
export class Under14Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
