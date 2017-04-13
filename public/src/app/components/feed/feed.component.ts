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


  public avatar= "https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/10712777_1550311111847951_5189862848348833175_n.jpg?oh=438a43556d19375473dc5c75ec96d472&oe=594F9CFD";
  public name= "André Martins";
  public desc= "Vamos ajudar os cães abandonados comprando alimentos e fazendo a doação diretamente no banco alimentar";
  public title= "Solidariedade com cães";
  public quando= "2017-04-07T00:00:00.000Z";
  public criador= '1';



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


