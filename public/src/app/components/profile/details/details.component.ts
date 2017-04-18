import { ProfileService } from './../profile.service';
import { Http } from '@angular/http';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  public idLogin: any;
  public userLogin: any;
  constructor(public route: ActivatedRoute, public http: Http, private profileService: ProfileService,
  private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

   getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.userLogin = res.user;
        let id = localStorage.getItem('USER_ID');
        this.idLogin = id;
       }
      );

    }
  }

}
