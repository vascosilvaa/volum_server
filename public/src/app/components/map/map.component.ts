import { AgmCoreModule, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { ProfileService } from './../../shared/services/profile.service';
import { volsService } from './../../shared/services/vols.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Overlay, overlayConfigFactory } from 'angular2-modal';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [volsService, GoogleMapsAPIWrapper, ProfileService],
})
export class MapComponent implements OnInit {
   @ViewChild("input") input;
  lat: number;
  lng: number;
   public searching: any;
  public searchFailed: any;
  public vols = [];
  public teste;
  public ready: boolean = false;
  public lats: any = {};
    public model: any;
    public coord: any;
  public coordAdvice: any;

  constructor(overlay: Overlay, vcRef: ViewContainerRef, private _fb: FormBuilder, public http: Http, private volsService: volsService, public profileService: ProfileService, private map: GoogleMapsAPIWrapper, private _loader: MapsAPILoader) {
        overlay.defaultViewContainer = vcRef;
   }
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

  navigate(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.coord = true;
  }

  formatter = (x: {
    formatted_address: string
  }) => x.formatted_address;


  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.profileService.search(term)
          .do(() => { this.searchFailed = false })
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);


  searchMap() {
    this.volsService.bounds(this.lats.swlat, this.lats.swlng, this.lats.nwlat, this.lats.nwlng)
      .then(res => {
        this.vols = res.vols;
        console.log("res", res)
        this.ready = true;
         for (let i = 0; i < this.vols.length; i++) {
          this.volsService.countLikes(this.vols[i].vol.id_vol)
            .then(res => {
              this.vols[i].vol.likes = res.likes;
            })
          this.volsService.checkLike(this.vols[i].vol.id_vol)
            .then(res => {
              this.vols[i].vol.likeState = parseInt(res.state);
            })
        }

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