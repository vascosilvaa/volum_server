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
})
export class ActivityComponent implements OnInit, OnDestroy {
  public privateVols: any;

  public instVols: any;
  public idProfile: any;
  public vols = [];
  public ready: boolean = false;
  observable: any;

  public teste: any;

  public user: any;
  constructor(public http: Http, private route: ActivatedRoute, private profileService: ProfileService,
    private auth: AuthenticationService) {

  }

  ngOnInit() {


    if (!this.profileService.activeUser) {
      this.profileService.activeProfileSource.subscribe((result) => {
        this.user = result;
        console.log("ASYNC User", this.user)
        this.checkType(this.user);
      });
    } else {
      this.user = this.profileService.activeUser;
      this.checkType(this.user);
    }





  }

  checkType(data) {

    this.user = data;
    console.log("USER TYPE", this.user.type)

    if (this.user.type == 1) {
      this.profileService.getMyVols(this.user.id_user).then(res => {
        this.vols = res.vols;
        this.ready = true;
        console.log(this.vols)

      }).catch(err => console.log(err));

    } else {

      this.profileService.getVolHistory(this.user.id_user)
        .then(res => {
          this.vols = res.vols;
          this.ready = true;

          console.log("history", this.vols)
        })
        .catch(err => console.log(err));


    }
  }

  ngOnDestroy() {
    console.log("destroy")
  }



}

