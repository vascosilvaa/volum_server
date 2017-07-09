
import { AuthenticationService } from './../../../../shared/Auth/authentication.service';
import { ProfileComponent } from './../../profile.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from './../../../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss']
})
export class PersonalSettingsComponent implements OnInit {

  public countries = [];
  public user: any;

  public form: FormGroup;

  public coverPhoto: any;
  public profilePhoto: any;


  constructor(private profileService: ProfileService, public auth: AuthenticationService, public profileComponent: ProfileComponent, public _fb: FormBuilder, public router: Router, public route: ActivatedRoute, public parser: NgbDateParserFormatter) { }

  ngOnInit() {

    this.profileService.getCountries().then(res => {
      this.countries = res;
      console.log("RES", res);
    })

    this.form = this._fb.group({
      first_name: [Validators.required],
      last_name: [Validators.required],
      gender: [Validators.required],
      birth_date: [Validators.required],
      email: [Validators.required],
      country: [Validators.required],
      region: [],
      phone: [],
      about: []

    });



    this.profileService.activeProfileSource.subscribe(profile => {
      if (profile) {

        this.user = profile;
        console.log("USER", this.user)

        this.form.patchValue({
          first_name: this.getFirstName(this.user.name), last_name: this.getLastName(this.user.name),
          gender: (this.user.gender == 0) ? 'Masculino' : 'Feminino', birth_date: this.parser.parse(this.user.birth_date), email: this.user.email,
          country: this.user.country, region: this.user.region, phone: this.user.phone, about: this.user.about
        });

      }
    });

  }

  getProfilePhoto(event) {

    var reader = new FileReader()
    reader.onload = (event) => {
      this.profilePhoto = event.target['result'];
    }

    reader.readAsDataURL(event.target.files[0]);



  }

  getCoverPhoto(event) {
    var reader = new FileReader()
    reader.onload = (event) => {
      this.coverPhoto = event.target['result'];
    }

    reader.readAsDataURL(event.target.files[0]);


  }


  //MUDAR PARA UM SERVIÇO GLOBAL
  getFirstName(string) {
    var array = string.split(" ");

    return array[0];
  }
  getLastName(string) {
    var array = string.split(" ");

    return array[1];
  }

  onSubmit(value, valid) {


    //FORMATAÇOES

    if (value.birth_date instanceof Date) {

    } else {
      value.birth_date = new Date(this.parser.format(value.birth_date));
    }

    value.name = value.first_name + ' ' + value.last_name;
    value.cover_photo = this.coverPhoto;
    value.photo_url = this.profilePhoto;
    delete value.first_name;
    delete value.last_name;

    console.log("VALOR A SER ENVIADO", value);
    this.profileService.editUser(value).then(res => {
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
