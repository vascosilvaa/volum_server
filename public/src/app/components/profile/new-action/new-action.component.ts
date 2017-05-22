import { ModalContext } from './../../../shared/modal-view-all/modal-view-all.component';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.scss']
})
export class NewActionComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  public schedule = 0;
  public img = 0;
  public url;
  public form: FormGroup;
  public categories: any;
  constructor(public parser: NgbDateParserFormatter , private _fb: FormBuilder, private auth: AuthenticationService, public profileService:ProfileService) { }

  ngOnInit() {
    this.profileService.getCategories().then(res => {
        this.categories = res.categories;
        console.log(res);
    });
      this.form = this._fb.group({
            name: ['', [Validators.required]],
            description: ['', [Validators.required]],
            category: ['', [Validators.required]],
            insurance: ['', [Validators.required]],
            localization: ['', [Validators.required]],
            date_begin: ['', [Validators.required]],
            date_end: ['', [Validators.required]],
            start_time: ['', [Validators.required]],
            end_time: ['', [Validators.required]],
            duration: ['', [Validators.required]],
        });
  }

  onSubmit(form: any) {  
    console.log('you submitted value:', form.value);
      this.form.controls.name.markAsTouched();
      this.form.controls.description.markAsTouched();
      this.form.controls.category.markAsTouched();
      this.form.controls.insurance.markAsTouched();
      this.form.controls.localization.markAsTouched();  
      this.form.controls.date_begin.markAsTouched();
      this.form.controls.date_end.markAsTouched();
      this.form.controls.start_time.markAsTouched();
      this.form.controls.end_time.markAsTouched();
      this.form.controls.duration.markAsTouched();  

      form.value.date_begin = new Date(this.parser.format(form.value.date_begin)).getTime();
      form.value.date_end = new Date(this.parser.format(form.value.date_end)).getTime();
      
      this.profileService.newAction( form.value ).then(res => {
        console.log(res);
    });

  }

  showSchedule(){
    this.schedule = 1;
  }

  hideSchedule(){
    this.schedule = 0;
  }

  showImgs(){
    this.img = 1;
  }
  hideImgs(){
    this.img = 0;
  }
}
