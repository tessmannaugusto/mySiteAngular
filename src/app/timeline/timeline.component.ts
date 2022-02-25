import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
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

  toggleFirstDate(){
    this.showFirstDate = !this.showFirstDate;
  }

  toggleSecondDate(){
    this.showSecondDate = !this.showSecondDate;
  }

  toggleThirdtDate(){
    this.showThirdDate = !this.showThirdDate;
  }

  toggleFourthDate(){
    this.showFourthDate = !this.showFourthDate;
  }

  toggleFifthDate(){
    this.showFifthDate = !this.showFifthDate;
  }

}
