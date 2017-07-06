import { AuthenticationService } from './../../../../shared/Auth/authentication.service';
import { ProfileComponent } from './../../profile.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from './../../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public id_user: any;
  public user: any;
  public education: any;
  public form: FormGroup;
  public new: any;;
  constructor(public profileService: ProfileService, public authService: AuthenticationService, public _fb: FormBuilder, public router: Router, public route: ActivatedRoute, public parser: NgbDateParserFormatter) { }

  ngOnInit() {
    this.new = 0;
  this.profileService.activeProfileSource.subscribe(profile => {
      if (profile) {
        this.user = profile;
        console.log("USER", this.user)
      }
      this.getEducation();
    });

  }

  getEducation() {
     this.profileService.getEducation(this.user.id_user).then(res => {
      this.education = res.education;
    });
  }

  newForm() {
    this.new=1;
  }
}
