import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  constructor() { }

  ngOnInit() {
  }

}
