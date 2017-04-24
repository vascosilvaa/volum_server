import { ProfileService } from './../profile.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
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
  public idProfile: any;
  public volHistory: any;
  public userLogin: any;
  public idLogin: any;
  public user: any;
  
  constructor(public http: Http, private feedService: FeedService, private route: ActivatedRoute, private profileService: ProfileService,
  private auth: AuthenticationService) { }

  ngOnInit() {
     this.route.params.subscribe((params) => {
      this.idProfile = this.route.parent.snapshot.params['id'];

    });
    this.profileService.getVolHistory(this.idProfile)
      .then(res => {
        this.volHistory = res.vols;
        console.log(this.volHistory);
      })
      .catch(err => console.log(err));
  }


}
