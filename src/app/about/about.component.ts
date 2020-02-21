import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

names = ['Chairperson - Ms J Overmeyer',
        'Vice Chairperson - Mr A Fortuin',
        'General Secretary - Ms S Ederies',
        'Assistant Secretary - Ms S Martin', 
        'Treasurer - Mr C Kenny',
        'M & R Officer - Mr E Davey', 
        'Club Captain - Mr S Arendse', 
        'U 8 Manager - Mr W Van Neel',
        'U 10 Manager - Mr R Majiet',
        'U 12 Manager - Mr A Fortuin',
        'U 16 Manager - Mr T Van Schalkwyk', 
        'U 18 Manager - Mr J Pietersen', 
        'Seniors Manager - Mr S Arendse', 
        'O 40 Manager - Mr E Davey'];


  constructor() { }

  ngOnInit() {
  }

}
