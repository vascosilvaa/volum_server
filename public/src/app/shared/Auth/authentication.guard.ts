import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

    user: any;
    sub: any;
    company: any;



    constructor(private router: Router, private authService: AuthenticationService, private route: ActivatedRoute) {

    }

    canActivate = this.check;
    canActivateChild = this.check;

    check(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/');
            return false;

        } else {
            console.log("authenticated")
            return true;
        };
    }

}