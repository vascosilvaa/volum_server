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
  lat: number = 41.100856;
  lng: number =  -8.544893;
  
  public privateVols: any;
  public instVols: any;
  
  constructor(public http: Http, private feedService: FeedService) { }

  ngOnInit() {

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
}