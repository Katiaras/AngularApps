import { Component } from '@angular/core';

@Component({
    selector: 'app-display-details',
    templateUrl: 'display-details.component.html',
    styleUrls: ['display-details.component.css']
})
export class DisplayDetailsComponent {
  display = true;
  TimeStamps = [];

  OnDisplayClick(){
    this.display= this.display===true?false: true;
    this.TimeStamps.push( new Date().toLocaleTimeString());
    console.log(this.TimeStamps);
  }

  IsBlue(index){
    if(index>=4){
      return "blue";
    }
    return 'white';
  }
}
