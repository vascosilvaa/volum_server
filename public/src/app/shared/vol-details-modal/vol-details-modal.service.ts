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

}