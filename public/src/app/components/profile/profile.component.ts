import { Overlay } from 'angular2-modal';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { ProfileService } from './profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService],
})
export class ProfileComponent implements OnInit {
  lat: number = 41.100856;
  lng: number = -8.544893;
  typeProfile = 1;
  invite = 0;
  private: string = 'private';
  public: string = 'public';
  vols: string;
  volsInst: any;
  volInst1: any;
  volInst2: any;
  volInst3: any;
  volInst4: any;
  volPriv1: any;
  volPriv2: any;
  volPriv3: any;
  volPriv4: any;
  volsPriv: any;
  volsTodos: any;
  login: boolean;
  i: any;
  usernames: any;
  userId: any;
  idProfile: any;
  private user: any;
  private userLogin: any;
  public idLogin: any;
  public state: Number;

  constructor(public http: Http, overlay: Overlay, vcRef: ViewContainerRef, private route: ActivatedRoute, private router: Router, private profileService: ProfileService,
    private auth: AuthenticationService) {
    overlay.defaultViewContainer = vcRef;
     }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      this.idProfile = this.route.snapshot.params['id'];
      this.profileService.getProfile(this.idProfile).then(res => {
        this.user = res.user;
      });

    });
    this.checkFollow();
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
  follow(id_user) {
    console.log("ID", id_user);
    this.profileService.follow(this.idProfile).then(res => {
      this.state = 1;
      console.log(res);
    });
  }
  unfollow(id_user) {
    this.profileService.unfollow(this.idProfile).then(res => {
      this.state = 0;
      console.log(res);

    });
  }
  checkFollow() {
    this.profileService.checkState(this.idProfile).then(res => {
      this.state = res.state;
    });
  }
}
