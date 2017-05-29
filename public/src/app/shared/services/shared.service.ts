import { Http } from '@angular/http';
import { HttpClient } from './../http-client';
import { GlobalConstants } from './../global-constants';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class SharedService {

    constructor(private http: HttpClient, public Http: Http) {

    }
 getAddress(lat, lng) {
        return this.Http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+lat+`,`+lng+`&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y`).toPromise()
        .then(res => {return res.json() })
        .catch(error => console.log(error));

    }
    getProfile(id){
       return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id).toPromise()
        .then(res => { return res.json()})
        .catch(error => console.log(error));
    }
    
    getCandidates(id_vol, amount) {
        if (amount == null) {
            return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/candidates`).toPromise()
                .then(res => { return res.json() })
                .catch(error => console.log(error));
        } else {
            return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/candidates`, { amount:amount }).toPromise()
                .then(res => { return res.json() })
                .catch(error => console.log(error));
        }
       
    }
    getConfirmed(id_vol, amount) {
        if (amount==null) {
            return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/confirmed`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
        } else {
            return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/confirmed`, { amount:amount }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
        }
    }


    checkLike(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/checkLike`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    like(id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/like`,null).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    dislike(id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/dislike`,null).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getLikes(id_vol) {
         return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/likes`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    deleteAction(id_vol) {
         return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/delete`, { id_vol: id_vol }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    denyCandidate(id_vol, id_user) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/applies/deny`, {id_user: id_user}).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    
}