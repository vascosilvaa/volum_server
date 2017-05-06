import { Router } from '@angular/router';
import { AuthenticationService } from './../../../../shared/Auth/authentication.service';
import { SharedService } from './../../../../shared/shared.service';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory} from 'angular2-modal';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent implements OnInit {
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
  private auth: AuthenticationService, private router: Router) {
    overlay.defaultViewContainer = vcRef;
   }

  ngOnInit() {}

  openProfileModal(idProfile) {
    return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile}, BSModalContext));
  }
}
