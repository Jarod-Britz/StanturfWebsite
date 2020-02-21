import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-under16',
  templateUrl: './under16.component.html',
  styleUrls: ['./under16.component.css']
})
export class Under16Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  backClicked(){
  this.location.back();
}

}
