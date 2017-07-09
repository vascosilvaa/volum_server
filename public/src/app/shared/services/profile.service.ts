import { User } from './../../interfaces/user.interface';
import { Subject } from 'rxjs/Subject';
import { Http, Jsonp } from '@angular/http';
import { GlobalConstants } from './../../shared/global-constants';
import { HttpClient } from './../../shared/http-client';


import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';




@Injectable()
export class ProfileService {

    public COUNTRY_API_KEY = '1727cb239d0a8f0d3d8ea64518801e45';
    public activeProfileSource: Subject<User> = new BehaviorSubject<User>(null);
    public activeUser;
    public userPromise;
    // Observable string stream
    activeProfile = this.activeProfileSource.asObservable();

    constructor(private http: HttpClient, private HTTP: Http) {

    }


    saveActiveUser(data: User) {
        this.activeProfileSource.next(data)
        this.activeUser = data;
    }

    clearActiveUser() {
        this.activeProfile = null;
        this.activeUser = null;
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
        return this.HTTP.get(`https://maps.googleapis.com/maps/api/geocode/json?address=` + address + `&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));

    }

    getCountries() {
        return this.HTTP.get(`https://restcountries.eu/rest/v2/all?fields=name`).toPromise()
            .then(res => { return res.json() })
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

    reloadProfile(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id).toPromise()
            .then(res => {
                this.saveActiveUser(res.json().user);
                return res.json()
            })
            .catch(error => console.log(error));
    }

    getUserSimple(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id + `/simple`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getScore(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id + `/score`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    checkOnline(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + `/checkOnline`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getVolHistory(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id + '/vols').toPromise() // VOLS QUE AINDA ESTAO ATIVOS E CRIADOS PELO USER
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    getMyVols(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id + `/my-vols`).toPromise()
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

    countFollowers(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/followers/count').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));

    }

    checkState(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/checkFollow').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getTop(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/top').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.error(error));
    }

    engageConversation(id_user) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/chat/`, { id_user: id_user }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getTestimonials(id_user, startAt, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/score/list', { startAt: startAt, amount: amount }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getOtherTestimonials(id_user, startAt, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/other-score/list', { startAt: startAt, amount: amount }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    editUser(value) {
        return this.http.put(`${GlobalConstants.API_ENDPOINT}/users/`, value).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    countVolsParticipation(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/vols/finished/count').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getActiveVols(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/vols/all').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getHistoryVols(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/vols/all/history').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getEducation(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/education').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    countCreated(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/vols/count').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    countCreatedActive(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/vols/active/count').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
}
