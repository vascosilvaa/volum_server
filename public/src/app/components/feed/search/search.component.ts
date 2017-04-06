import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService, NgbTypeaheadConfig]
})
export class SearchComponent implements OnInit {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: SearchService) { }

  ngOnInit() {
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

}