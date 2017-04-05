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

  @ViewChild('teste') teste: any;

  private privateVols: any;
  private instVols: any;
  ready: boolean = false;

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView: 2,
    


  };


  constructor(public http: Http, private feedService: FeedService) { }

  ngOnInit() {

    console.log(this.teste);

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


