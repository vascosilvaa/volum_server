import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './shared/Auth/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn;
  public user: any;
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private router: Router, private auth: AuthenticationService) {
    overlay.defaultViewContainer = vcRef;
  }
  ngOnInit() {

    this.getUser();
  }

  getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.user = res.user;
        console.log(this.user);
      }
      );

    }
  }

  openLogin() {

    return this.modal.open(LoginComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));

  }

  openRegister() {

    return this.modal.open(RegisterComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
  logout() {
    this.auth.logout();
    this.user = null;
  }

}
