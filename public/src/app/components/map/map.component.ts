import { AgmCoreModule, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { MapsAPILoader } from 'angular2-google-maps/core';

import { volsService } from './../../shared/services/vols.service';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [volsService, GoogleMapsAPIWrapper],
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  public vols = []
  public teste;
  public ready: boolean = false;
  public lats: any = {}

  constructor(public http: Http, private volsService: volsService, private map: GoogleMapsAPIWrapper, private _loader: MapsAPILoader) { }
  location = {};
  setPosition(position) {
    this.location = position.coords;
    console.log(position.coords.latitude);
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;

    this.teste = {
      lat: this.lat,
      lng: this.lng
    }





  }
  ngOnInit() {
    this.getLocation();

  }


  search() {
    this.volsService.bounds(this.lats.swlat, this.lats.swlng, this.lats.nwlat, this.lats.nwlng)
      .then(res => {
        this.vols = res.vols;
        console.log("res", res)
        this.ready = true;


      })
      .catch(err => console.log(err));
  }

  getVols(event) {

  console.log(event)  

    this.lats = {
      swlat: event.getSouthWest().lat(),
      swlng: event.getSouthWest().lng(),
      nwlat: event.getNorthEast().lat(),
      nwlng: event.getNorthEast().lng()
    }





  }

  private convertStringToNumber(value: string): number {
    return +value;
  }
  getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));


    }

  }
}