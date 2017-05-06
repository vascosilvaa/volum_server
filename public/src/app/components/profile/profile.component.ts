import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { ProfileService } from './profile.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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

  constructor(public http: Http, private route: ActivatedRoute, private profileService: ProfileService,
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
