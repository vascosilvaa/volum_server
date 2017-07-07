import { SharedService } from './../services/shared.service';
import { Router } from '@angular/router';
import { ProfileService } from './../services/profile.service';
import { AuthenticationService } from './../Auth/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { volsService } from './../services/vols.service';
import { AppModule } from './../../app.module';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
  providers: [volsService]
  public id_vol: any;

}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  context: ModalContext;
  public category: any;
  public schedule = 0;
  public img = 0;
  public url1;
  public url2;
  public url3;
  public form: FormGroup;
  public categories: any;
  public name: any;
  public desc: any;
  public localization: any;
  public start_time: any;
  public end_time: any;
  public duration: any;
  public searching: any;
  public searchFailed: any;
  public coord: any;
  public coordAdvice: any;
  public idProfile: any;
  public errorFiles: any;
  public vol: any;
  public first: any;

  public hora_inicio: any;
  public hora_fim: any;
  public minutos_inicio: any;
  public minutos_fim: any;
  public modelData: any;
  public model: any;
  public model_title: any;
  public model_desc: any;
  public model_category: any;
  public model_insurance: any;
  public model_date_begin: any;
  public model_date_end: any;
  public model_duration: any;
  public model_lat: any;
  public model_lng: any;
  public dateChanged: any;

  public formChanged: any;

  constructor(public SharedService: SharedService, public router: Router, private dialog: DialogRef<ModalContext>, public parser: NgbDateParserFormatter, private _fb: FormBuilder, public volsService: volsService, public ProfileService: ProfileService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    this.context.size = "lg";
  }

  ngOnInit() {
    this.ProfileService.getCategories().then(res => {
      this.categories = res.categories;
      console.log(res);
      console.log("ID MODEL ->>" + this.context.id_vol);
    });
    this.volsService.getVol(this.context.id_vol).then(res => {

      this.vol = res.vol;



      this.model_title = this.vol.name;
      this.model_desc = this.vol.description;
      this.model_category = this.vol.id_category;
      this.model_insurance = this.vol.insurance;
      this.model_date_begin = new Date(this.vol.date_begin.replace(/-/g,"/"));
      console.log(this.model_date_begin);
      this.model_date_end = this.vol.date_end;
      this.model_lat = parseFloat(this.vol.lat);
      this.model_lng = parseFloat(this.vol.lng);
      this.SharedService.getAddress(this.vol.lat, this.vol.lng).then(res => {
        this.modelData = res.results;
        this.model = this.modelData[0].formatted_address;
        console.log(this.model);
      });
      if (this.vol.start_time != "00:00:00.000000" && this.vol.start_time) {
        this.hora_inicio = this.vol.start_time.slice(0, 2);
        this.minutos_inicio = this.vol.start_time.slice(3, 5);

        this.start_time = this.hora_inicio + ":" + this.minutos_inicio;
      } else {
        this.start_time = "";
      }
      if (this.vol.end_time != "00:00:00.000000" && this.vol.end_time) {
        this.hora_fim = this.vol.end_time.slice(0, 2);
        this.minutos_fim = this.vol.end_time.slice(3, 5);
        this.end_time = this.hora_fim + ":" + this.minutos_fim;

      } else {
        this.end_time = "";
      }

      this.model_duration = this.vol.duration;
    });
    this.form = this._fb.group({
      name: ['', []],
      description: ['', []],
      category: ['', []],
      insurance: ['', []],
      date_begin: ['', []],
      date_end: ['',],
      start_time: ['', [Validators.pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
      end_time: ['', [Validators.pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
      duration: ['',],
    });
  }

  onSubmit(form: any) {
    if(this.formChanged==1) {
    console.log(form.valid);
    this.form.controls.name.markAsTouched();
    this.form.controls.description.markAsTouched();
    this.form.controls.category.markAsTouched();
    this.form.controls.insurance.markAsTouched()
    this.form.controls.date_begin.markAsTouched();
    this.form.controls.date_end.markAsTouched();
    this.form.controls.start_time.markAsTouched();
    this.form.controls.end_time.markAsTouched();
    this.form.controls.duration.markAsTouched();
    if (form.valid) {
      if(form.value.date_begin == "") {
         form.value.date_begin ="";
        form.value.date_begin = this.model_date_begin;
      }
      if(form.value.date_end == "") {
         form.value.date_end ="";
        form.value.date_end = this.model_date_end;
      }




      form.value.lat = this.model_lat;
      form.value.lng = this.model_lng;
      console.log("VALUE", form.value);
      this.volsService.editAction(this.context.id_vol, form.value).then(res => {
        console.log(res);
        if (res.error) {
          console.log('erro')
        } else {
          console.log('updated');
        }
      });

    } else {
      this.coordAdvice = true;
    }
    }
  }

  navigate(lat, lng) {
    this.model_lat = lat;
    this.model_lng = lng;
  }

  formatter = (x: {
    formatted_address: string
  }) => x.formatted_address;


  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.ProfileService.search(term)
          .do(() => { this.searchFailed = false })
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);


  readUrl(event) {
    console.log(event.target.files.length);
    if (event.target.files.length > 3) {
      this.errorFiles = 1;
    } else {
      this.errorFiles = 0;
      if (event.target.files && event.target.files[0] && event.target.files[1]) {
        var reader = new FileReader()
        reader.onload = (event) => {
          this.url1 = event.target['result'];
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      if (event.target.files && event.target.files[0] && !event.target.files[1]) {
        var reader = new FileReader()
        reader.onload = (event) => {
          this.url1 = event.target['result'];
          this.url2 = undefined;
          this.url3 = undefined;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      if (event.target.files && event.target.files[1] && event.target.files[2]) {
        var reader = new FileReader()
        reader.onload = (event) => {
          this.url2 = event.target['result'];
        }
        reader.readAsDataURL(event.target.files[1]);
      }
      if (event.target.files && event.target.files[1] && !event.target.files[2]) {
        var reader = new FileReader()
        reader.onload = (event) => {
          this.url2 = event.target['result'];
          this.url3 = undefined;
        }
        reader.readAsDataURL(event.target.files[1]);
      }


      if (event.target.files && event.target.files[2]) {
        var reader = new FileReader()
        reader.onload = (event) => {
          this.url3 = event.target['result'];
        }
        reader.readAsDataURL(event.target.files[2]);
      }

    }
  }

  showSchedule() {
    this.schedule = 1;
  }

  hideSchedule() {
    this.schedule = 0;
  }

  showImgs() {
    this.img = 1;
  }
  hideImgs() {
    this.img = 0;
  }

  changed() {
    this.formChanged=1;
  }
}
