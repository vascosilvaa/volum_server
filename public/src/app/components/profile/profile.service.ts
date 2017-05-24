import { Http } from '@angular/http';
import { GlobalConstants } from './../../shared/global-constants';
import { HttpClient } from './../../shared/http-client';


import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Component} from '@angular/core';
import { Jsonp, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';




@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private HTTP: Http) {

    }

    search(term) {
        if (term === '') {
            return Observable.of([]);
        }
        let params = new URLSearchParams();
        params.set('address', term);

        let url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y`
        let array = [];

        return this.HTTP
            .get(url, { params })
            .map(response => array = response.json().results);
    }

    getCoord(address) {
        console.log(address);
        return this.HTTP.get(`https://maps.googleapis.com/maps/api/geocode/json?address=`+address+`&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y`).toPromise()
        .then(res => {return res.json() })
        .catch(error => console.log(error));

    }

    getCategories() {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/list/categories`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    newAction(body) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/`, body).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getProfile(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getVolHistory(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id + '/vols').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    getMyVols(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id + '/my-vols').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    follow(id_user) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/users/follow`, { id_user: id_user }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    unfollow(id_user) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/users/unfollow`, { id_user: id_user }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    listFollows(id_user, type) {
        if (type == 1) {

            return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/follows/users').toPromise()
                .then(res => { return res.json() })
                .catch(error => console.log(error));

        } else if (type == 2) {
            return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/follows/inst').toPromise()
                .then(res => { return res.json() })
                .catch(error => console.log(error));
        }
    }

    countFollows(id_user, type) {
        if (type == 1) {

            return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/follows/users/count').toPromise()
                .then(res => { return res.json() })
                .catch(error => console.log(error));

        } else if (type == 2) {
            return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/follows/inst/count').toPromise()
                .then(res => { return res.json() })
                .catch(error => console.log(error));
        }
    }

    checkState(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/checkFollow').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

}