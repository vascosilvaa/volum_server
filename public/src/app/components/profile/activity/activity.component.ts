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


  }
  ngOnDestroy() {
    console.log("destroy")
  }



}

