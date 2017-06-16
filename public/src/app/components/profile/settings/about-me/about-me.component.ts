import { ProfileService } from './../../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  ngOnInit() {

    this.profileService.getCountries().then(res => {

      console.log("COUNTR", res);
    })


  }

}
