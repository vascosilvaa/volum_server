import { AuthenticationService } from './../../shared/Auth/authentication.service';
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
  public login: any;
  public user: any;
  public privateVols: any;
  public vols: any;
  public instVols: any;
  ready: boolean = false;
  public loading : boolean = false;
  public sum: number = 0;
  config: Object = {
    pagination: 'null',
    spaceBetween: 30,
    slidesPerView: 2,
    loopedSlides: 1,
    zoom: true
  };

  constructor(public http: Http, private feedService: FeedService, private auth: AuthenticationService) { }

  ngOnInit() {

    if (this.auth.isAuthenticated()) {
      this.login = 1;
    } else {
      this.login = 0;
    }
    //VERIFICAR LOGIN

    if (this.login) {
      this.getVols(0, 5, true);


    } else if (!this.login) {
      this.feedService.getPrivates()
        .then(res => {
          this.privateVols = res.vols;
          this.ready = true;
        })
        .catch(err => console.log(err));

      this.feedService.getInstVol()
        .then(res => {
          this.instVols = res.vols;
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }

  getVols(startAt, amount, replace) {
    this.feedService.getVols(startAt, amount)
      .then(res => {
        if (replace) {
          this.vols = res.vols;
        } else {
          console.log("rs", res.vols);
          this.loading = false;
          this.vols = this.vols.concat(res.vols);
          console.log(this.vols);

        }
        console.log("VOLS", this.vols)
        this.ready = true;
        for (let i = 0; i < this.vols.length; i++) {
          this.feedService.countLikes(this.vols[i].vol.id_vol)
            .then(res => {
              this.vols[i].vol.likes = res.likes;
            })
          this.feedService.checkLike(this.vols[i].vol.id_vol)
            .then(res => {
              this.vols[i].vol.likeState = parseInt(res.state);
            })
        }
      })
      .catch(err => console.log(err));
  }

  onScroll() {
    this.loading = true;
    console.log("scroll");
    this.sum = this.sum + 5;
    this.getVols(this.sum, 5, false);
  }

}


