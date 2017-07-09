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
  public new: any;
  constructor(public profileComponent: ProfileComponent, public auth: AuthenticationService, public profileService: ProfileService, public authService: AuthenticationService, public _fb: FormBuilder, public router: Router, public route: ActivatedRoute, public parser: NgbDateParserFormatter) { }

  ngOnInit() {
    this.new = 0;
  this.profileService.activeProfileSource.subscribe(profile => {
      if (profile) {
        this.user = profile;
        console.log("USER", this.user)
      }
      this.getEducation();
    });

    

  this.form = this._fb.group({
            name: ['', Validators.required],
            institution: ['', Validators.required],
            end_at: ['', Validators.required],
            start_at: ['', Validators.required]
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

  onSubmit(value, valid) {
    console.log(value);
    
    this.profileService.sendEducation(value).then(res => {
      if (res['success']) {

        this.profileService.reloadProfile(this.user.id_user);
        this.auth.reloadUser(this.user.id_user, true);

        this.profileComponent.getUser();
        this.router.navigate(['../../about'], { relativeTo: this.route });

      }
    }).catch(err => {
      console.log(err)
    })
    
  }
}
