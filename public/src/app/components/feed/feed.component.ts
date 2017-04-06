import { FeedService } from './feed.service';
import { GlobalConstants } from './../../shared/global-constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [FeedService]
})



export class FeedComponent implements OnInit {

  @ViewChild('swiper1') swiper1;

  public privateVols: any;
  public instVols: any;
  ready: boolean = false;

  config: Object = {
    pagination: 'null',
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    loopedSlides: 1,
    zoom: true
  };


  constructor(public http: Http, private feedService: FeedService) { }
  test(a) {
    console.log(a);
  }


  ngOnInit() {

    this.feedService.getPrivates()
      .then(res => {
        this.privateVols = res.vols;
        console.log(res.vols);
        this.ready = true;
      })
      .catch(err => console.log(err));

    this.feedService.getInstVol().then(res => {
      this.instVols = res.vols;
      console.log(res);

    }).catch(err => {

    })

  }
}


