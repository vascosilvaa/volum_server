import { SharedService } from './../../shared/services/shared.service';
import { ProfileService } from './../../shared/services/profile.service';
import { AppComponent } from './../../app.component';
import { Overlay } from 'angular2-modal';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
  public online: number = 0;
  idProfile: any;
  public user: any = {}
  private userLogin: any;
  public idLogin: any;
  public state: Number;

  constructor(public http: Http, overlay: Overlay, vcRef: ViewContainerRef, private sharedService: SharedService, private route: ActivatedRoute, private router: Router, private injector: Injector, private profileService: ProfileService,
    private auth: AuthenticationService) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {

    this.route.params.subscribe((params) => {


      //FACEBOOK TOKEN
      this.route.queryParams.subscribe((query => {
        console.log(query);

        if (query.id_token) {

          this.auth.storeUserCredentials(query.id_token);
          this.auth.reloadUser(params.id, true).then(res => {
            this.injector.get(AppComponent).getUser();
          })
          localStorage.setItem("USER_ID", params.id);

        }

      }))

      this.idProfile = this.route.snapshot.params['id'];

      this.profileService.getProfile(this.idProfile).then(res => {

        this.profileService.saveActiveUser(res.user);

        console.log("INICIAL USER", this.user)
        this.user = res.user;


        this.sharedService.getAddress(this.user.lat, this.user.lng).then(res => {
          console.log("res", res.results)
          this.user['location'] = res.results[0].formatted_address;

        })
        this.profileService.checkOnline(this.user.id_user).then(res => {
          this.online = res.state;
        })

      });

    });
    this.checkFollow();
    this.getUser();
  }
  getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        if (!res.user) {
          this.auth.logout();
        } else {
          console.log(this.userLogin);
          this.userLogin = res.user;
          let id = localStorage.getItem('USER_ID');
          this.idLogin = id;

        }

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
  engageConversation() {
    this.profileService.engageConversation(this.user['id_user']).then(res => {
      console.log(res);
      this.router.navigate(['./chat/msg/', res.id_conversation])
    }).catch(err => {
      this.router.navigate(['./chat/msg/'])

    })
  }
}
