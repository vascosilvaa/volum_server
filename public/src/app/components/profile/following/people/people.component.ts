import { SharedService } from './../../../../shared/services/shared.service';
import { ProfileService } from './../../../../shared/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../../shared/Auth/authentication.service';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public users = [];

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
    private auth: AuthenticationService, private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {
  }



  ngOnInit() {

    this.route.parent.parent.parent.params.subscribe(res => {
      this.listFollows(res.id);
    });
  }

  listFollows(id) {

    this.profileService.listFollows(id, 1).then(res => {
      this.users = res.users;
      console.log(res);
    });

  }

  openProfileModal(idProfile) {
    return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile,  inProfile: 1 }, BSModalContext));
  }
}
