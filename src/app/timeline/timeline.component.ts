import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showFirstDate = false;
  showSecondDate = false;
  showThirdDate = false;
  showFourthDate = false;
  showFifthDate = false;

  toggleDetails(date: Number){
    if(date == 1){
      this.showFirstDate = !this.showFirstDate;
      this.showSecondDate = false;
      this.showThirdDate = false;
      this.showFourthDate = false;
      this.showFifthDate = false;
    }else if(date == 2){
      this.showSecondDate = !this.showSecondDate;
      this.showFirstDate = false;
      this.showThirdDate = false;
      this.showFourthDate = false;
      this.showFifthDate = false;
    }else if(date == 3){
      this.showThirdDate = !this.showThirdDate;
      this.showFirstDate = false;
      this.showSecondDate = false;
      this.showFourthDate = false;
      this.showFifthDate = false;
    }else if(date == 4){
      this.showFourthDate = !this.showFourthDate;
      this.showFirstDate = false;
      this.showThirdDate = false;
      this.showSecondDate = false;
      this.showFifthDate = false;
    }else{
      this.showFifthDate = !this.showFifthDate;
      this.showFirstDate = false;
      this.showThirdDate = false;
      this.showFourthDate = false;
      this.showSecondDate = false;
    }
  }
}
