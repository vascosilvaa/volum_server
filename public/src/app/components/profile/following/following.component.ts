import { ProfileService } from './../profile.service';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


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
  constructor(public route: ActivatedRoute, public http: Http, private profileService: ProfileService,
  private auth: AuthenticationService) { }

  ngOnInit() {
 this.route.params.subscribe((params) => {
      this.idProfile = this.route.snapshot.params['id'];

      this.profileService.getProfile(this.idProfile).then(res => {
        this.user = res.user;
      });

    });
    this.getUser();
  }
  getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.userLogin = res.user;
        console.log(this.userLogin);
        let id = localStorage.getItem('USER_ID');
        this.idLogin = id;
       }
      );

    }
  }

}