
import { SharedService } from './../services/shared.service';
import { Router } from '@angular/router';
import { ProfileService } from './../services/profile.service';
import { AuthenticationService } from './../Auth/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { volsService } from './../services/vols.service';
import { AppModule } from './../../app.module';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  public lat: any;
  public lng: any;

  public formChanged: any;
  @ViewChild("input") input;

  constructor(public SharedService: SharedService, public router: Router, private dialog: DialogRef<ModalContext>, public parser: NgbDateParserFormatter, private _fb: FormBuilder, public volsService: volsService, public ProfileService: ProfileService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    this.context.size = "lg";
  }

  ngOnInit() {


    this.form = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      insurance: ['', Validators.required],
      date_begin: ['', Validators.required],
      date_end: [],
      start_time: [''],
      end_time: [''],
      duration: [],
    });




    this.volsService.getVol(this.context.id_vol).then(res => {


      this.ProfileService.getCategories().then(res => {
        this.categories = res.categories;

        this.form.patchValue({
          name: this.vol.name, description: this.vol.description,
          category: this.vol.id_category, insurance: this.vol.insurance,
          date_begin: this.parser.parse(this.vol.date_begin), date_end: this.parser.parse(this.vol.date_end),
          start_time: this.vol.start_time, end_time: this.vol.end_time, duration: this.vol.duration
        })
      });

      this.vol = res.vol;

      this.lat = this.vol.lat;
      this.lng = this.vol.lng;

      console.warn(this.vol)





      this.SharedService.getAddress(this.vol.lat, this.vol.lng).then(res => {
        this.modelData = res.results;

        this.input.nativeElement.value = res.results[0].formatted_address;

        console.log(this.lat)



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

      setTimeout(() => {
        this.lat = this.vol.lat;
        this.lng = this.vol.lng;

      }, 500)

    });

  }

  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
    this.lat = $event['coords']['lat'];
    this.lng = $event['coords']['lng'];
    console.log(this.lat);
    console.log(this.lng)

    console.log("model 1", this.model)
    this.SharedService.getAddress(this.lat, this.lng).then(res => {
      console.log(res);
      if (res.results.length > 0) {

        this.input.nativeElement.value = res.results["0"].formatted_address;
        this.coord = true;

      }
      console.log("model 2", this.model)
    })
  }


  navigate(lat, lng) {
    this.lat = lat;
    this.lng = lng;
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

  onSubmit(form: any) {

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

      if (form.value.date_begin instanceof Date) {

      } else {

        form.value.date_begin = new Date(this.parser.format(form.value.date_begin));
        form.value.date_end = new Date(this.parser.format(form.value.date_end));
      }
      let array = []


      if (this.url1) {
        array.push(this.url1);

      }
      if (this.url2) {
        array.push(this.url2);

      }
      if (this.url3) {
        array.push(this.url3);
      }

      form.value.lat = this.lat;
      form.value.lng = this.lng;
      form.value.photos = array;

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
