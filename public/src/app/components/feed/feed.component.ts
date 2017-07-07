import { Router } from '@angular/router';
import { volsService } from './../../shared/services/vols.service';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { GlobalConstants } from './../../shared/global-constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [volsService]
})

export class FeedComponent implements OnInit {
  @ViewChild('swiper1') swiper1;
  public login: any;
  public user: any;
  public privateVols: any;
  public vols: any;
  public instVols: any;
  ready: boolean = false;
  public loading: boolean = false;
  public sum: number = 0;
  public insurance: number = -1;
  public type: any = -1;
  public startDate: any;
  public endDate: any;
  public params: any = {};
  public categories: any;
  public category: any = -1;
  public showFilter: boolean = false;
  public disableContainer: boolean = false;

  config: Object = {
    pagination: 'null',
    spaceBetween: 30,
    slidesPerView: 2,
    loopedSlides: 1,
    zoom: true
  };

  constructor(public http: Http, private volsService: volsService, public parser: NgbDateParserFormatter, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {

    if (this.auth.isAuthenticated()) {
      this.login = 1;
    } else {
      this.login = 0;
    }
    //VERIFICAR LOGIN

    if (this.login) {
      this.getVols(0, 6, true);


    } else if (!this.login) {
      this.volsService.getPrivates(0, 10)
        .then(res => {
          this.privateVols = res.vols;
          this.ready = true;
        })
        .catch(err => {
          this.router.navigateByUrl('/error');
        }
        );

      this.volsService.getInstVol(0, 10)
        .then(res => {
          this.instVols = res.vols;
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }

  noFilter(send) {
    delete this.params['type'];
    this.type = -1;
    delete this.params['category'];
    this.category = -1;
    delete this.params['insurance'];
    this.insurance = -1;
    delete this.params['startDate'];
    delete this.params['endDate'];
    this.startDate = "";
    this.endDate = "";
    if(send==1){
      this.getVols(0, 6, true);
    }
  }
  applyFilter() {
    this.params['insurance'] = this.insurance;
    this.params['type'] = this.type;
    this.params['category'] = this.category;
    this.sum = 0;
    if(this.params['type'] == -1 || this.params['type'] == '-1' ){
      delete this.params['type'];
    }
    if(this.params['category'] == -1 || this.params['category'] == '-1'){
      delete this.params['category'];
    }
    if(this.params['insurance'] == -1 || this.params['insurance'] == '-1'){
      delete this.params['insurance'];
    }
     if(this.params['startDate'] == -1 || this.params['startDate'] == '-1' ){
      delete this.params['startDate'];
    }
    if(this.params['endDate'] == -1 || this.params['endDate'] == '-1' ){
      delete this.params['endDate'];
    }
    console.log(this.params)
    if(this.startDate && !this.endDate && this.startDate != 'undefined') {
      if (this.startDate instanceof Date ) {
      } else {
        this.startDate = this.parser.format(this.startDate);
        this.params['startDate'] = this.startDate;
      }
    }
    if(this.endDate && !this.startDate && this.endDate != 'undefined') {
      if (this.endDate instanceof Date ) {
      } else {
        this.endDate = this.parser.format(this.endDate);
        this.params['endDate'] = this.endDate;
      }
    }
    if(this.endDate && this.startDate && this.startDate != 'undefined' && this.endDate != 'undefined') {
      if (this.startDate instanceof Date ) {
      } else {
        this.startDate = this.parser.format(this.startDate);
        this.params['startDate'] = this.startDate;
      }
      if (this.endDate instanceof Date ) {
      } else {
        this.endDate = this.parser.format(this.endDate);
        this.params['endDate'] = this.endDate;
      }
    }
    this.getVols(0, 10, true);
    this.openFilter();
  }

  getVols(startAt, amount, replace) {
    this.params['startAt'] = startAt;
    this.params['amount'] = amount;

    this.volsService.getVolsAldrabado(this.params)
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

  onScroll() {
    this.loading = true;
    console.log("scroll");
    this.sum = this.sum + 6;
    this.getVols(this.sum, 6, false);
  }

  openFilter() {
    this.showFilter = !this.showFilter;
    this.disableContainer = !this.disableContainer;
    this.getCategories();
    this.startDate = "";
    this.endDate = "";
    delete this.params['startDate'];
    delete this.params['endDate'];
  }

   getCategories() {
    this.volsService.getCategories()
      .then(res => {
        this.categories = res.categories;
      })
      .catch(err => console.log(err));
  }

  closeFilter() {
    this.showFilter = !this.showFilter;
    this.disableContainer = !this.disableContainer
  }

}


