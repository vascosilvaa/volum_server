import { GlobalConstants } from './global-constants';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SocketService {
    private url = GlobalConstants.API_ENDPOINT;
    private socket;


    constructor() {
        this.socket = io(this.url);
        console.log(this.socket);
        console.log(this.url);
    }

    onConnect(id_user) {
        this.socket.emit("connect", id_user);
    }
}