import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.scss']
})
export class NewActionComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  public schedule = 0;
  public img = 0;
  constructor() { }

  ngOnInit() {
  }
  showSchedule(){
    this.schedule = 1;
  }

  hideSchedule(){
    this.schedule = 0;
  }

  showImgs(){
    this.img = 1;
  }
  hideImgs(){
    this.img = 0;
  }
}