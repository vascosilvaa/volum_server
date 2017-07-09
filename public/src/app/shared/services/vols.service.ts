import { HttpClient } from './../../shared/http-client';
import { GlobalConstants } from './../../shared/global-constants';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class volsService {

    constructor(private http: HttpClient) {

    }


    confirmCandidate(id_vol, id_user) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/accept`, { id_user: id_user }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }


    countConfirmed(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/confirmed/count`).toPromise()
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

    getMessage(idVol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + idVol + '/score/message').toPromise()
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

    cancelApply(id_user, id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/cancel`, { id_user: id_user }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    like(id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/like`, null).toPromise()
            .then(res => { return res.json(); })
            .catch(error => console.log(error));
    }
    dislike(id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/dislike`, null).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getComments(id) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id + `/comments`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    sendComment(message, id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/comment`, { message: message }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    countCandidates(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/candidates/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    countConfirmeds(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/confirmed/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getCandidates(id_vol, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/candidates`, { amount: amount }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getConfirmed(id_vol, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/applies/confirmed`, { amount: amount }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    countComments(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/comments/count`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }


    getPrivates(startAt, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols`, { type: 'private', startAt: startAt, amount: amount }).toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => {
                return err.json();
            });
    }

    getInstVol(startAt, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols`, { type: 'inst', startAt: startAt, amount: amount }).toPromise()
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

    getVols(startAt, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols`, { startAt: startAt, amount: amount }).toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => {
                return err.json();
            });
    }
    getVolsAldrabado(params) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols`, params).toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => {
                return err.json();
            });
    }
    checkLike(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/checkLike`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    search(query, startAt, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/search`, { search: query, startAt: startAt, amount: amount }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    nearby(lat, lng) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/nearby/`, { lat: lat, lng: lng }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    bounds(swlat, swlng, nwlat, nwlng) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/bounds/`, { swlat: swlat, swlng: swlng, nwlat: nwlat, nwlng: nwlng }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    editAction(id_vol, body) {
        return this.http.put(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol, body).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    getScores(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/score`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    endVol(id_vol, body) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/finish`, body).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getCategories() {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/list/categories`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    insertTestimony(body) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/users/score`, body).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getInvites(id_vol) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/invites`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    insertInvite(id_vol, users) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/vols/` + id_vol + `/invite`, { users: users }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    listPending(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/vols/my-applies`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    listFinished(id_user, type) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + `/my-vols/history`, { user_type: type }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    listInvites(startAt, amount) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/notifications/7`, { startAt: startAt, amount: amount }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getVolScore(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/vols/` + id_user + `/score`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }


    userVolScore(id_user, id_vol) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/users/` + id_user + `/getVolScore`, { id_vol: id_vol }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
}