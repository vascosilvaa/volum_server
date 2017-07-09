import { GlobalConstants } from './shared/global-constants';
import { Component, Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class SearchNavService {

    constructor(private http: Http) { }

    search(term) {
        if (term === '') {
            return Observable.of([]);
        }
        let params = new URLSearchParams();
     
        let url = `${GlobalConstants.API_ENDPOINT}/search?amount=10&startAt=0&search=${term}`
        let array = [];

        return this.http
            .get(url)
            .map(response => 
                array = response.json().message
            );
    }
}

