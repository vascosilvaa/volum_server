import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpClient } from './../../shared/http-client';
import { GlobalConstants } from './../../shared/global-constants';
import { Injectable } from '@angular/core';


@Injectable()
export class ChatService {
    public conversation: string;
    public conversationUpdate: Subject<string> = new Subject<string>();

    constructor(public http: HttpClient) {

    }


    activeConversation(value) {
        this.conversation = value;
        this.conversationUpdate.next(this.conversation);
    }

    getConversations(id_user) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/chat/` + id_user).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    getMessages(id_user, id_user2) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/chat/` + id_user, { id_user: id_user2 }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    sendMessage(id_user, id_user2, message) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/chat/` + id_user + `/message`, { id_user: id_user2, message: message }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
}
