import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { ProfileService } from './../../../shared/services/profile.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  public id_user: any;
  public user: any;
  constructor(public profileService: ProfileService, public overlay: Overlay, vcRef: ViewContainerRef, private route: ActivatedRoute,) {
        overlay.defaultViewContainer = vcRef;

  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
        this.id_user = this.route.parent.parent.snapshot.params['id'];
        console.log(this.id_user);
        this.profileService.getProfile(this.id_user).then(res => {
          this.user = res.user;
          console.log(this.user.type);
        })
    });
  }
}
