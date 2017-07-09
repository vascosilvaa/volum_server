import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { ProfileService } from './../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(public profileService: ProfileService, public authService: AuthenticationService) { }

  ngOnInit() {

    this.authService.userPromise.then(res => {
      this.id_user = res.user.id_user;
      console.log(this.id_user);
    });


    this.profileService.activeProfileSource.subscribe(profile => {
      if (profile) {
        this.user = profile;

        this.profileService.getEducation(this.user.id_user).then(res => {
          this.education = res.education;
        });

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

}
