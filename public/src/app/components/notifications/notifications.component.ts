import { VolDetailsModalComponent } from './../../shared/vol-details-modal/vol-details-modal.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AppService } from './../../app.service';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public user: any;
  public id_user: any;
  public newNotificationCount: any;
  public notifications: any;
  public notificationsTrue;

  constructor(public appService: AppService,public auth: AuthenticationService, public modal: Modal, overlay: Overlay, vcRef: ViewContainerRef,) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.user = res.user;
        this.id_user = this.user.id_user;
        console.log(this.id_user);
      });
      this.getNotificationCount(this.id_user);
      this.getNotifications(this.id_user);
    }
  }

  getNotificationCount(id) {
    this.appService.newNotificationCount(id).then(res => {
      this.newNotificationCount = res.count;
      console.log(res);
    })
  }

  getNotifications(id) {
    this.appService.getNotifications(id,0,100000).then(res => {
      this.notifications = res.notifications;
      console.log(this.notifications.length)
      if(this.notifications.length > 0) {
        this.notificationsTrue=1;
      }
    })
  }

  openVolDetails(idVol) {
  return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol }, BSModalContext));
}
}
