import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  Username="";

  constructor() { }

  ngOnInit() {
  }

  UsernameIsEmpty(){
    if(this.Username==""){
      return true;
    }
    return false;
  }

  Reset(){
    this.Username ="";
  }
}
