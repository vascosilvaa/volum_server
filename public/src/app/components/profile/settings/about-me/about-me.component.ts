import { ProfileService } from './../../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public form: FormGroup;
  constructor(public profileService: ProfileService, public _fb: FormBuilder) { }

  ngOnInit() {

    this.profileService.getCountries().then(res => {

      console.log("COUNTR", res);
    })
      this.form = this._fb.group({
            about: [],

    });


  }

}
