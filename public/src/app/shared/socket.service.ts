import { GlobalConstants } from './global-constants';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SocketService {
    private url = GlobalConstants.SOCKET_ENDPOINT;
    private socket;


    constructor() {
        this.socket = io(this.url);
        console.log(this.socket);
        console.log(this.url);
    }

    onConnect(id_user) {
        this.socket.emit("user", id_user);
    }

    onNotification() {
        let observable = new Observable(observer => {

            this.socket.on('notification', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        })

        return observable;
    }
    
    onRequest() {
        let observable = new Observable(observer => {

            this.socket.on('request', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        })

        return observable;
    }
}