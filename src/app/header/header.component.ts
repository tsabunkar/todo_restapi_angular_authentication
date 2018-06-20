import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fullImagePath:  string = '/assets/images/tlogo.jpg' ;
  imageWidth : number = 50;
  
  constructor() { }

  ngOnInit() {
  }

}
