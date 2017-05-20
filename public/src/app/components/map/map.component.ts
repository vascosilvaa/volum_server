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
  
  public privateVols: any;
  public instVols: any;
  
  constructor(public http: Http, private feedService: FeedService) { }
  location = {};
   setPosition(position){
      this.location = position.coords;
      console.log(position.coords.latitude);
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
      }
  ngOnInit() {
    this.getLocation()
    this.feedService.getPrivates()
      .then(res => {
        this.privateVols = res.vols;
        console.log(this.privateVols);
      })
      .catch(err => console.log(err));

    this.feedService.getInstVol().then(res => {
      this.instVols = res.vols;

    }).catch(err => {

    })

  }
  getLocation(){
     if(window.navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
            };

  }
}