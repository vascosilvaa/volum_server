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
  public vols = [];
  public userLogin: any;
  public idLogin: any;
  public user: any;
  public activeUser: any;
  constructor(public http: Http, private feedService: FeedService, private route: ActivatedRoute, private profileService: ProfileService,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      console.log("PARAMS", params['id']);
      this.auth.userPromise.then(res => {
        this.user = res.user;
        console.log(this.user)

        this.profileService.dataString$.subscribe(
          data => {
            this.activeUser = data;
            console.log("USER TYPE", this.activeUser.type)

            if (this.activeUser.type == 1) {
              this.profileService.getMyVols(params['id']).then(res => {
                this.vols = res.vols;
                console.log(this.vols)

              }).catch(err => console.log(err));
            } else {
              this.profileService.getVolHistory(params['id'])
                .then(res => {
                  this.vols = res.vols;
                  console.log("history", this.vols)
                })
                .catch(err => console.log(err));

            }

          });


      });



    });
  }

}

