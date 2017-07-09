import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { ProfileService } from './../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as moment from 'moment'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public education: any;
  public user: any;
  public id_user: any;
  public userIn: any;
  public dateFormatted: any;
  public timeDiff: any;
  public age: any;

  constructor(public profileService: ProfileService, public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.authService.userPromise.then(res => {
      this.id_user = res.user.id_user;
      console.log(this.id_user);
    });


    this.profileService.activeProfileSource.subscribe(profile => {
      if (profile) {
        this.user = profile;

        console.log(this.user)

        this.profileService.getEducation(this.user.id_user).then(res => {
          this.education = res.education;
        });


        if (this.user.birth_date && this.user.birth_date != "0000-00-00") {
          this.dateFormatted = new Date(this.user.birth_date);
          this.timeDiff = Math.abs(Date.now() - this.dateFormatted);
          this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24)) / 365);
          this.user.age = parseInt(this.age);
        }
        else {
          
        }

      }
    })


  }



  getAge(date) {
    return moment().diff(date, 'years');

  }

  goTo(network, id) {
    switch (network) {

      case 'facebook':
        window.open('http://www.facebook.com/' + id);
        break;

    }

  }

  redirectSettings() {
    this.router.navigate(['./profile/' + this.user.id_user + '/settings' ]);
  }

}
