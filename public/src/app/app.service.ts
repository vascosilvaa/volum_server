import { GlobalConstants } from './shared/global-constants';
import { HttpClient } from './shared/http-client';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    newNotificationCount(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/not-read/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
    newRequestCount(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/requests/not-read/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
    getNotifications(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
    getRequests(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/requests`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    };
    cleanRequests(id_user) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/notifications/requests/read-all`, null).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    cleanNotifications(id_user) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/notifications/read-all`, null).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
 
}