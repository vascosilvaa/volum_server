import { FeedService } from './../../feed/feed.service';
import { GlobalConstants } from '../../../shared/global-constants';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [FeedService]
})
export class ActivityComponent implements OnInit {
  public privateVols: any;
  public instVols: any;
  
  constructor(public http: Http, private feedService: FeedService) { }

  ngOnInit() {

    this.feedService.getPrivates()
      .then(res => {
        this.privateVols = res.vols;
        console.log(res.vols);
      })
      .catch(err => console.log(err));

    this.feedService.getInstVol().then(res => {
      this.instVols = res.vols;
      console.log(res);

    }).catch(err => {

    })

  }
}
