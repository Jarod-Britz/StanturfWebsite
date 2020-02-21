import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-under8',
  templateUrl: './under8.component.html',
  styleUrls: ['./under8.component.css']
})
export class Under8Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
