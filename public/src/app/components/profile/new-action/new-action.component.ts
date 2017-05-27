import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ModalContext } from './../../../shared/modal-view-all/modal-view-all.component';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from './../profile.service';
import { Component, OnInit, LOCALE_ID } from '@angular/core';
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
  public errorFiles:any;

  constructor(public Router: Router, public router: ActivatedRoute, public parser: NgbDateParserFormatter, private _fb: FormBuilder, private auth: AuthenticationService, public profileService: ProfileService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.idProfile = this.router.parent.parent.snapshot.params['id'];

    });
    this.profileService.getCategories().then(res => {
      this.categories = res.categories;
      console.log(res);
    });
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      insurance: ['', [Validators.required]],
      date_begin: ['', [Validators.required]],
      date_end: ['', ],
      start_time: ['', [Validators.pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
      end_time: ['', [Validators.pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
      duration: ['',],
    });
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
    if (form.valid && this.coord) {


      console.log('you submitted value:', form.value);
      if (form.value.date_begin instanceof Date) {

      } else {
        form.value.date_begin = new Date(this.parser.format(form.value.date_begin));
        form.value.date_end = new Date(this.parser.format(form.value.date_end));
      }


      form.value.lat = this.lat;
      form.value.lng = this.lng;
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
    if(event.target.files.length > 3){
      this.errorFiles=1;
    } else {
       this.errorFiles=0;
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
    if (event.target.files && event.target.files[1] && event.target.files[2] ) {
          var reader = new FileReader()
          reader.onload = (event) => {
           this.url2 = event.target['result'];
           }
      reader.readAsDataURL(event.target.files[1]);
    }
     if (event.target.files && event.target.files[1] && !event.target.files[2] ) {
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

  /*change(id) {
    if (id==1 && this.name=="Insira aqui o título da ação de voluntariado") { // name
      this.name="";
    } else if (id==2 && this.desc=="Descrição das funções do voluntário") {// descrição 
       this.desc="";
    }
    else if (id==3 &&  this.localization == "Insira a localização do voluntariado") {// localização 
       this.localization="";
    }
    else if (id==4 && this.start_time== "Hora inicial da ação de voluntariado") {// start time 
       this.start_time="";
    }
    else if (id==5 && this.end_time=="Hora final da ação de voluntariado") {// end time 
       this.end_time="";
    }
    else if (id==6 && this.duration == "Duração diária da ação de voluntariado") {// duração 
       this.duration="";
    }
  }
   changeOut(id) {
    if (id==1 && this.name == "") { // name
      this.name="Insira aqui o título da ação de voluntariado";
    } else if (id==2 && this.desc =="") {// descrição 
      this.desc="Descrição das funções do voluntário";
    }
    else if (id==3 && this.localization == "") {// localização 
      this.localization = "Insira a localização do voluntariado";
    }
    else if (id==4 && this.start_time == "") {// start time 
      this.start_time="Hora inicial da ação de voluntariado ";
    }
    else if (id==5 && this.end_time == "") {// end time 
      this.end_time="Hora final da ação de voluntariado";
    }
    else if (id==6 && this.duration == "") {// duração 
      this.duration = "Duração diária da ação de voluntariado";
    }
  }
*/
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
}
