import { GlobalConstants } from './shared/global-constants';
import { HttpClient } from './shared/http-client';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    newNotificationCount(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/` + id_user + `/not-read/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
    newRequestCount(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/` + id_user + `/requests/not-read/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
    getNotifications(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/` + id_user).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
    getRequests(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/` + id_user + `/requests`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
}