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
        /*  
                this.authService.userPromise.then(res => {
                    console.log("company route: " + this.company);
                    console.log("company user id: " + res.user._company_id)
                    if (res._company_id == this.company) {
                        console.log(this.company);
                        console.log("company Ã© igual");
                    } else {
                        this.authService.logout();
                        console.log("derp");
                    }
                });
        */
        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/feed');
            console.log("a")
            return false;
        } else {
            console.log("authenticated")
        };
        return true;
    }

}