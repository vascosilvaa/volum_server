import { volsService } from './../../../shared/services/vols.service';
import { ProfileService } from './../../../shared/services/profile.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { GlobalConstants } from '../../../shared/global-constants';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  providers: [volsService]
})
export class ActivityComponent implements OnInit, OnDestroy {
  public privateVols: any;

  public instVols: any;
  public idProfile: any;
  public vols = [];
  public userLogin: any;
  public idLogin: any;
  public user: any;
  observable: any;

  public teste: any;

  public activeUser: any;
  constructor(public http: Http, private volsService: volsService, private route: ActivatedRoute, private profileService: ProfileService,
    private auth: AuthenticationService) {

  }

  ngOnInit() {

    this.activeUser = this.profileService.getUser();
    console.log("USER", this.activeUser)

    if (this.activeUser && this.vols.length > 0) {

      this.checkType(this.activeUser)

    }

    this.observable = this.profileService.activeProfileSource.subscribe(
      data => {
        this.checkType(data);
      })



  }

  checkType(data) {
    console.log("data", data);
    this.activeUser = data;
    console.log("USER TYPE", this.activeUser.type)

    if (this.activeUser.type == 1) {
      this.profileService.getMyVols(this.activeUser.id_user).then(res => {
        this.vols = res.vols;
        console.log(this.vols)

      }).catch(err => console.log(err));

    } else {
      
      this.profileService.getVolHistory(this.activeUser.id_user)
        .then(res => {
          this.vols = res.vols;
          console.log("history", this.vols)
        })
        .catch(err => console.log(err));


    }
  }

  ngOnDestroy() {
    console.log("destroy")
  }



}

