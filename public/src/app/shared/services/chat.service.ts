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

    getConversations() {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/chat/`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    getMessages(id_conversation) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/chat/` + id_conversation + '/messages').toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    sendMessage(id_conversation, message) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/chat/` + id_conversation + `/message`, { message: message }).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
    getLastMessage(id_conversation) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/chat/` + id_conversation + `/messages/last`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }

    getProfile(id_conversation) {
        return this.http.get(`${GlobalConstants.API_ENDPOINT}/chat/`+id_conversation+`/user`).toPromise()
            .then(res => { return res.json() })
            .catch(error => console.log(error));
    }
}
