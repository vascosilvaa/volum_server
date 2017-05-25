import { GlobalConstants } from './../../shared/global-constants';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

    constructor(private http: Http) {

    }

    getPrivates() {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/?type=private`).toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => {
                return err.json();
            });
    }

    getInstVol() {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/?type=inst`).toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => {
                return err.json();
            });
    }


    countLikes(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/likes/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getVols() {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols`).toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => {
                return err.json();
            });
    }
}