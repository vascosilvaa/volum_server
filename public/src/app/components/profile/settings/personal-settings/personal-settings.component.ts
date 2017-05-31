import { ProfileService } from './../../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss']
})
export class PersonalSettingsComponent implements OnInit {

  public countries = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    this.profileService.getCountries().then(res => {
      this.countries = res;
      console.log("RES", res);
    })
  }

}
