import { ProfileService } from './../../../shared/services/profile.service';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';


@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  public idProfile: any;
  public user: any;
  public userLogin: any;
  public idLogin: any;

  public userCount: Number;
  public instCount: Number;

  constructor(public overlay: Overlay, vcRef: ViewContainerRef, public route: ActivatedRoute, public http: Http, private profileService: ProfileService,
    private auth: AuthenticationService) { 
      overlay.defaultViewContainer = vcRef;
    }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idProfile = this.route.parent.parent.snapshot.params['id'];
      this.profileService.getProfile(this.idProfile).then(res => {
        this.user = res.user;
        this.listCount(this.idProfile);
      });

    });
    this.getUser();
  }
  getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.userLogin = res.user;
        console.log(this.userLogin);
        this.idLogin = res.user.id_user;
      }
      );

    }
  }

  listCount(id) {

    this.profileService.countFollows(id, 1).then(res => {
      this.userCount = res.count;
    });

    this.profileService.countFollows(id, 2).then(res => {
      this.instCount = res.count;

    });

  }

}