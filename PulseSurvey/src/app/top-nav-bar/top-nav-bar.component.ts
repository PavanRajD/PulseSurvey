import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  
  morning : boolean;
  constructor() { 
    this.morning=true;
  }
  date = new Date();
 
  ngOnInit() {
  }

}
