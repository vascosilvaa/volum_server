import { DetailsService } from './details.service';
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
  styleUrls: ['./details.component.scss'],
  providers: [DetailsService]
})
export class DetailsComponent implements OnInit {
  lat: number;
  lng: number;
  public idLogin: any;
  public userLogin: any;
  public idVol: any;
  public vols: any;
  public addressData: any;
  public address=[];
  public addressName=[];
  public candidates:any;
  public confirmeds:any;
  constructor(public route: ActivatedRoute, public http: Http, overlay: Overlay, vcRef: ViewContainerRef,
  public modal: Modal, private sharedService: SharedService, private auth: AuthenticationService, 
  private router: Router, private detailsservice: DetailsService) {
    overlay.defaultViewContainer = vcRef;
   }


  ngOnInit() {
    this.route.params.subscribe((params) => {
        this.idVol = this.route.snapshot.params['id'];
        this.idLogin = this.route.parent.parent.snapshot.params['id'];
    });
    this.getVol(this.idVol);
    this.getCandidates(this.idVol);
    this.getConfirmed(this.idVol);

    
  }

  getVol(idVol) {
    this.detailsservice.getVol(idVol)
      .then(res => {
        this.vols = res.vol;
        this.getAddress();
        this.lat = parseFloat(this.vols.lat);
        this.lng = parseFloat(this.vols.long);
        console.log(this.lat + ',' + this.lng);
      })
      .catch(err => console.log(err));
  }

  getCandidates(idVol) {
    this.detailsservice.getCandidates(idVol)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }
    getConfirmed(idVol) {
    this.detailsservice.getConfirmed(idVol)
      .then(res => {
        this.confirmeds = res.users;
      })
      .catch(err => console.log(err));
  }

    getAddress() {
        this.detailsservice.getAddress(this.vols.lat, this.vols.long)
        .then(res => {
          this.addressData = res.results;
          console.log(this.addressData);
           this.address[this.vols.id_vol] = this.addressData[0].formatted_address;
          this.addressName[this.vols.id_vol] = this.addressData[0].address_components[0].short_name;
        })
       
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
