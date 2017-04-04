import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

//import { HttpClient } from '../http-client';
//import { User } from '../user/user';
import { GlobalConstants } from '../global-constants';

@Injectable()
export class AuthenticationService {


    userPromise: any;

    constructor(private http: HttpClient, private router: Router) {
        this.loadUserCredentials();
    }

    private errorHandler = error => console.error('AuthenticationService error', error.json());

    //TODO load information about the roles
    private LOCAL_TOKEN_KEY = 'yourTokenKey';
    private authenticated = false;
    private authToken: string;
    public dataAvailable = false;

    reloadUser(id, self) {
        var temp = this.http.get(`${GlobalConstants.API_ENDPOINT}/users/` + id).toPromise()
            .then(res => {
                let response = res.json();
                this.dataAvailable = true;
                return response;
            })
            .catch(err => {
                this.router.navigateByUrl('error');
                this.errorHandler(err);
                console.log(err);
                return err.json();
            });
        if (self) {
            this.userPromise = temp;
        }
        return temp;
    }
    login(loginInfo) {
        return this.http.post(`${GlobalConstants.API_ENDPOINT}/auth`, loginInfo).toPromise()
            .then(res => {
                this.storeUserCredentials(res.json().token);
                localStorage.setItem("USER_ID", res.json().userId);
                return res.json();
            })
            .catch(err => {
                this.errorHandler(err);
                return err.json();
            });
    }
    logout() {
        this.destroyUserCredentials();
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }

    private loadUserCredentials() {
        let token = localStorage.getItem(this.LOCAL_TOKEN_KEY);
        let id = localStorage.getItem("USER_ID");
        if (token) {
            this.useCredentials(token);
            this.reloadUser(id, true);
        }
    }

    private storeUserCredentials(token: string) {
        localStorage.setItem(this.LOCAL_TOKEN_KEY, token);
        this.useCredentials(token);
    }

    private useCredentials(token: string) {
        this.authenticated = true;
        this.authToken = token;

        this.http.setAuthHeader(this.authToken);
    }

    private destroyUserCredentials() {
        this.authToken = undefined;
        this.authenticated = false;
        this.http.removeAuthHeader();
        localStorage.removeItem(this.LOCAL_TOKEN_KEY);
    }
}