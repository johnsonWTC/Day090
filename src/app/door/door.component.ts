import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  constructor() { }

show =true;

  ngOnInit(): void {
  }

  ShowButton(){
    this.show = ! this.show;
  }

}
