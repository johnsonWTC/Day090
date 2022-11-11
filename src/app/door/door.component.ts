import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  constructor() { }

show =true;
insideText ="Showing text";
buttonText : string = "show";


  ngOnInit(): void {
  }

  ShowButton(){
    if(this.show){
      this.insideText = "showing text"
      this.buttonText = "Hide text";
    }else{
      
      this.buttonText = "Show text";
    }
    this.show = !this.show;
  }

}
