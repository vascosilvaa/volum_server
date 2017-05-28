import { FeedService } from './../feed/feed.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [FeedService],
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;

  public vols: any;

  constructor(public http: Http, private feedService: FeedService) { }
  location = {};
  setPosition(position) {
    this.location = position.coords;
    console.log(position.coords.latitude);
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }
  ngOnInit() {
    this.getLocation()
    this.feedService.getVols(0, 10)
      .then(res => {
        this.vols = res.vols;

      })
      .catch(err => console.log(err));


  }

  private convertStringToNumber(value: string): number {
    return +value;
  }
  getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    };

  }
}