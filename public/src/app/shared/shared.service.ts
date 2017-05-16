import { GlobalConstants } from './global-constants';
import { HttpClient } from './http-client';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class SharedService {

    constructor(private http: HttpClient) {

    }

      getProfile(id){
       return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id).toPromise()
            .then(res => { return res.json()})
            .catch(error => console.log(error));
    }
    
    getCandidates(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/candidates`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    getConfirmed(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/confirmed`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    countLikes(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/likes/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
 

/*    getComments(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id + `/comments`).toPromise()
            .then(res => { return res.json()})
            .catch(error => console.log(error));
    }
*/
    
}