import { SharedService } from './../../../shared/services/shared.service';
import { ProfileService } from './../../../shared/services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ModalContext } from './../../../shared/modal-view-all/modal-view-all.component';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, LOCALE_ID, ViewChild } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.scss']
})
export class NewActionComponent implements OnInit {
  lat: number = 41.100856;
  lng: number = -8.544893;
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
  public model: any;
  public submitted: boolean = false;
    public readyTo: boolean = false;
  public photos = [];
  public insuranceControl: any;
  public categoryControl: any;

  @ViewChild("input") input;

  constructor(public Router: Router, public sharedService: SharedService, public router: ActivatedRoute, public parser: NgbDateParserFormatter, private _fb: FormBuilder, private auth: AuthenticationService, public profileService: ProfileService) { }

  ngOnInit() {
    this.insuranceControl=2;
    this.categoryControl=2;
    this.router.params.subscribe((params) => {
      this.idProfile = this.router.parent.parent.snapshot.params['id'];

    });
    this.profileService.getCategories().then(res => {
      this.categories = res.categories;
    });
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['-1', [Validators.required]],
      insurance: ['-1', [Validators.required]],
      date_begin: ['', [Validators.required]],
      date_end: ['', [Validators.required]],
      start_time: ['',],
      end_time: ['', ],
      duration: ['',],
      photos: []
    });

  
    
  }


  insuranceChanged() {
    if(this.form.controls.insurance.value==1 || this.form.controls.insurance.value==0 ) {
      this.insuranceControl=1;
      this.form.controls.insurance.markAsTouched();
    } else {
      this.insuranceControl=2;
      this.form.controls.insurance.markAsTouched();
    }
  }
    

  categoryChanged() {
    if(this.form.controls.category.value == '-1' ) {
      this.categoryControl=2;
      this.form.controls.category.markAsTouched();
    } else {
      this.categoryControl=1;
      this.form.controls.category.markAsTouched();
    }
  }
  navigate(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.coord = true;
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
        this.profileService.search(term)
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
          this.photos.push(event.target);
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


  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
    this.lat = $event['coords']['lat'];
    this.lng = $event['coords']['lng'];
    console.log(this.lat);
    console.log(this.lng)

    console.log("model 1", this.model)
    this.sharedService.getAddress(this.lat, this.lng).then(res => {
      console.log(res);
      if (res.results.length > 0) {

        this.input.nativeElement.value = res.results["0"].formatted_address;
        this.coord = true;

      }
      console.log("model 2", this.model)
    })
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
    this.form.controls.insurance.markAsTouched();
    this.form.controls.date_begin.markAsTouched();
    this.form.controls.date_end.markAsTouched();
    this.form.controls.start_time.markAsTouched();
    this.form.controls.end_time.markAsTouched();
    this.form.controls.duration.markAsTouched();


    if (this.coord && this.form.valid && this.submitted == false) {
      this.submitted = true;
      console.log(this.form)
      form.value.lat = this.lat;
      form.value.lng = this.lng;
      let array = []
      form.value.category = parseInt(form.value.category);
      if (this.url1) {
        array.push(this.url1);

      }
      if (this.url2) {
        array.push(this.url2);

      }
      if (this.url3) {
        array.push(this.url3);

      }
      form.value.photos = array;
      console.log('you submitted value:', form.value);

      if (form.value.date_begin instanceof Date) {

      } else {
        form.value.date_begin = new Date(this.parser.format(form.value.date_begin));
        form.value.date_end = new Date(this.parser.format(form.value.date_end));
      }

      console.log("VALUE", form.value);
      this.profileService.newAction(form.value).then(res => {
        console.log(res);
        if (res.error) {
          console.log('erro')
        } else {
          this.Router.navigate(['/profile/' + this.idProfile + '/details/' + res.id_vol]);
        }
      });

    } else {
      this.coordAdvice = true;
    }



  }


}
