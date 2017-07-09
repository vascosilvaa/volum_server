import { SharedService } from './../../shared/services/shared.service';
import { ProfileService } from './../../shared/services/profile.service';
import { AppComponent } from './../../app.component';
import { Overlay } from 'angular2-modal';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
  public ready: boolean = false;
  i: any;
  usernames: any;
  userId: any;
  public online: number = 0;
  public id_user: any;
  public user: any = {};

  public id_logged_user: number;
  public state: number;
  public scoreReady: boolean = false;



  constructor(public http: Http, public overlay: Overlay, vcRef: ViewContainerRef, private sharedService: SharedService, private route: ActivatedRoute, private router: Router, private injector: Injector, private profileService: ProfileService,
    private auth: AuthenticationService) {
    overlay.defaultViewContainer = vcRef;
  }



  ngOnInit() {

    //NAVEGAR SEMPRE PARA O TOPO DA PAGINA


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.route.params.subscribe((params) => {

      this.scoreReady = false;

      console.log("TROCOU PARAMS", params)
      this.id_user = params.id;


      //FACEBOOK TOKEN
      this.route.queryParams.subscribe((query => {
        console.log(query);

        if (query.id_token) {

          this.auth.storeUserCredentials(query.id_token);
          this.auth.reloadUser(params.id, true).then(res => {
            this.injector.get(AppComponent).getUser();
          })
          this.auth.storeFacebookToken(query.id_token);
          console.log("TOKEN", this.auth.facebookToken);
          localStorage.setItem("USER_ID", params.id);
          location.reload();

        }
      }))


      this.getUser();
      this.checkFollow();
    });

  }


  getUser() {

    //SE ESTIVER AUTENTICADO

    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        if (!res.user) {
          this.auth.logout();
        } else {

          this.id_logged_user = res.user.id_user;


          //SE O ID DO PERFIL FOR IGUAL AO LOGADO VAI BUSCAR DADOS AO USER PROMISE
          if (this.id_logged_user == this.id_user) {
            this.user = res.user;

            this.online = 1;
            this.ready = true;
            this.profileService.saveActiveUser(res.user);
            this.getScore();

            //SE NAO FAZ O PEDIDO
          } else {

            this.profileService.reloadProfile(this.id_user).then(result => {


              console.log("USER URL PROFILE", this.user)

              this.user = result.user;
              this.ready = true;
              this.checkOnline();
              this.getScore();

              console.log("USER:", this.user);

            });


          }

        }

      }
      );
    } else {
      this.auth.logout();
    }
  }


  follow(id_user) {
    console.log("ID", id_user);
    this.profileService.follow(this.id_user).then(res => {
      this.state = 1;
      console.log(res);
    });
  }
  unfollow(id_user) {
    this.profileService.unfollow(this.id_user).then(res => {
      this.state = 0;
      console.log(res);

    });
  }
  checkFollow() {

    this.profileService.checkState(this.id_user).then(res => {
      this.state = res.state;
      console.log(this.state);
    });
  }

  engageConversation() {
    this.profileService.engageConversation(this.id_user).then(res => {
      console.log(res);

      this.router.navigate(['./chat/msg/', res.id_conversation])
    }).catch(err => {
      this.router.navigate(['./chat/msg/'])
    })
  }
  checkOnline() {
    this.profileService.checkOnline(this.user.id_user).then(res => {
      this.online = res.state;

    });
  }
  getScore() {
    this.profileService.getScore(this.user.id_user).then(res => {
      console.log("SCORE", res.score)
      this.user['score_number'] = res.score;
      this.user['score'] = this.getNumber(res.score);
      this.user['negative_score'] = this.getNumber(res.score - 5);
      this.scoreReady = true;
      console.log(this.user.score)

    });
  }
  getNumber(num) {
    let number = Math.round(num);
    if (num < 0) {
      number = Math.abs(number);
    }
    return new Array(number);
  }

  ngOnDestroy() {
    this.profileService.clearActiveUser()
  }
}
