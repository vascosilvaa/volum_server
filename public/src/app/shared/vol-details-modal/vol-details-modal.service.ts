import { HttpClient } from './../http-client';
import { GlobalConstants } from './../../shared/global-constants';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class VolDetailsModalService {
    constructor(private http: HttpClient) {
    }

    getUser(id) {
       return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getVol(idVol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + idVol).toPromise()
            .then(res => {
                return res.json();
            })
           .catch((error: any) => console.log(error))
    }

    checkState(id_user, id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + '/checkState', { id_user: id_user }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };

    apply(id_user, id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + '/apply', { id_user: id_user }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getAddress(lat, lng) {
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+lat+`,`+lng+`&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y`).toPromise()
        .then(res => {return res.json() })
        .catch(error => console.log(error));

    }

      countLikes(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/likes/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    checkLike(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/checkLike`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    like(id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/like`,null).toPromise()
            .then(res => { return res.json(); })
            .catch(error => console.log(error));
    }
    dislike(id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/`+ id_vol + `/dislike`,null).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getComments(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id + `/comments`).toPromise()
            .then(res => { return res.json()})
            .catch(error => console.log(error));
    }

    sendComment(message, id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/comment`, {  message: message}).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

}