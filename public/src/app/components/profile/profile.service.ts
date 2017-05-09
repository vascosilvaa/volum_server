import { Http } from '@angular/http';
import { GlobalConstants } from './../../shared/global-constants';
import { HttpClient } from './../../shared/http-client';


import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private HTTP: Http) {

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
    follow(id_user, id_user1) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + '/follow', { id_user: id_user1 }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

}