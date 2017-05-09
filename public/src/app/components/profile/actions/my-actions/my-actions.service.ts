import { Http } from '@angular/http';
import { HttpClient } from './../../../../shared/http-client';
import { GlobalConstants } from './../../../../shared/global-constants';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class MyActionsService {
    constructor(private http: HttpClient, private HTTP: Http) {

    }


    getMyActions(id) {
    return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id + `/my-vols`).toPromise()
        .then(res => { return res.json() })
        .catch(error => console.log(error));

    }

    getAddress(lat, lng) {
        return this.HTTP.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+lat+`,`+lng+`&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y`).toPromise()
        .then(res => {return res.json() })
        .catch(error => console.log(error));

    }


}