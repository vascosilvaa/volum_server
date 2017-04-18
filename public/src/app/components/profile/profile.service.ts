import { GlobalConstants } from './../../shared/global-constants';
import { HttpClient } from './../../shared/http-client';


import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class ProfileService {

    constructor(private http: HttpClient) {

    }

      getProfile(id){
       return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id).toPromise()
            .then(res => { return res.json()})
            .catch(error => console.log(error));
    }
}