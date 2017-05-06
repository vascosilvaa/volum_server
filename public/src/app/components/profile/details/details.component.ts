import { ModalEndComponent } from './../../../shared/modal-end/modal-end.component';
import { ModalViewAllComponent } from './../../../shared/modal-view-all/modal-view-all.component';
import { SharedService } from './../../../shared/shared.service';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory} from 'angular2-modal';
import { ProfileService } from './../profile.service';
import { Http } from '@angular/http';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  public idLogin: any;
  public userLogin: any;
  constructor(public route: ActivatedRoute, public http: Http, private profileService: ProfileService,
  overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
  private auth: AuthenticationService, private router: Router) {
    overlay.defaultViewContainer = vcRef;
   }


  ngOnInit() {
    this.getUser();
  }

   getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.userLogin = res.user;
        let id = localStorage.getItem('USER_ID');
        this.idLogin = id;
       }
      );

    }
  }

  openViewAll(type, idVol, name) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ idVol: idVol, type: type , name: name}, BSModalContext));

  }

   openRemoveConfirm(type,name) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, name: name}, BSModalContext));

  }
  
  openEnd(type, idVol) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ idVol: idVol, type: type}, BSModalContext));

  }

}
