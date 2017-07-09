import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { LoginComponent } from '../../login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService, NgbTypeaheadConfig]
})
export class SearchComponent implements OnInit {
  public login: any;
  model: any;
  searching = false;
  searchFailed = false;
  constructor(public modal: Modal, private _service: SearchService, private router: Router, public auth: AuthenticationService,) { }

  ngOnInit() {
     if (this.auth.isAuthenticated()) {
      this.login = 1;
    } else {
      this.login = 0;
    }
  }
  formatter = (x: {
    name: string
    registration: {
    name: string
    }
  }) => x.name || x.registration.name;


  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._service.search(term)
          .do(() => { this.searchFailed = false })
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);


  navigate(id, type) {
    if (type == 1 || type == 2) {
      this.model="";
      this.router.navigate(['profile/' + id + '/about']);
    } else if (type == 0) {
      this.model="";
      this.router.navigate(['action/' + id])
    }
  }

  goToSearch() {
    if (this.model == undefined) {
      this.model = "";
    } else {
      if (this.model.length < 1) {

      } else {

        this.router.navigate(['/search', { q: this.model }]);
      }
    }
  }

  openLogin() {
      return this.modal.open(LoginComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

}
