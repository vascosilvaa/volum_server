import { ProfileService } from './../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  public user : any;

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    
    this.profileService.activeProfileSource.subscribe((result) => {
      this.user = result;
      console.log("ASYNC User", this.user)
    });

    if (!this.profileService.activeUser) {
      this.profileService.activeProfileSource.subscribe((result) => {
        this.user = result;
        console.log("ASYNC User", this.user)
      });
    } else {
      this.user = this.profileService.activeUser;
    }

    console.log("THIS.user", this.user)

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
