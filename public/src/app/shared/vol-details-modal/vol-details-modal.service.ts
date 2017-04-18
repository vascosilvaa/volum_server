import { GlobalConstants } from './../../shared/global-constants';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VolDetailsModalService {
    constructor(private http: Http) {

    }

    getVol(idVol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + idVol).toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => {
                return err.json();
            });
    }

}