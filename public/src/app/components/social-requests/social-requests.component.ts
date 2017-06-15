import { Modal } from 'angular2-modal/plugins/bootstrap';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { AppService } from './../../app.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';



@Component({
  selector: 'app-social-requests',
  templateUrl: './social-requests.component.html',
  styleUrls: ['./social-requests.component.scss']
})
export class SocialRequestsComponent implements OnInit {
   public user: any;
  public id_user: any;
  public newNotificationCount: any;
  public notifications: any;
  public requests: any;
  public requestsTrue: any;
  constructor(public appService: AppService, public auth: AuthenticationService, public modal: Modal, overlay: Overlay, vcRef: ViewContainerRef,) { }

  ngOnInit() {
     if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.user = res.user;
        this.id_user = this.user.id_user;
        this.getRequests(this.id_user);
      });
      
    }
  }

   getRequests(id) {
    this.appService.getRequests(id,0,100000).then(res => {
      this.requests = res.notifications;
      if(this.requests.length > 0) {
        this.requestsTrue=1;
      }
    })
  }

}
