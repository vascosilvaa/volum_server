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
import * as moment from 'moment';


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
  public hora_inicio: any;
  public hora_fim: any;
  public minutos_inicio: any;
  public minutos_fim: any;
  public addressData: any;
  public address=[];
  public addressName=[];
  public candidates:any;
  public confirmeds:any;
  public numberComments: any;
  public comments: any;
  public comentario: any;
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
    this.countComments(this.idVol);
  }

  sendComment(comment) {
    if (typeof comment == 'string' && comment.length > 0 && comment && comment.replace(/^\s+/g, '').length) {

      this.detailsservice.sendComment(comment, this.idVol).then(res => {
        this.comentario = '';
        this.numberComments++;
        this.comments.push({
          id_user: this.vols.user.id_user,
          message: comment,
          photo_url: this.vols.user.photo_url,
          name: this.vols.user.name,
        })
      });

    }
  }

  countComments(idVol) {
    this.detailsservice.countComments(idVol)
      .then(res => {
        this.numberComments = res.count;
        if(this.numberComments>0) {
          this.getComments(idVol);
        }
      })
      .catch(err => console.log(err));
  }

  getComments(idVol) {
    this.detailsservice.getComments(idVol)
        .then(res => {
          this.comments = res.comments;
        })
        .catch(err => console.log(err));
  }

  getVol(idVol) {
    this.detailsservice.getVol(idVol)
      .then(res => {
        this.vols = res.vol;
        this.getAddress();
        this.lat = parseFloat(this.vols.lat);
        this.lng = parseFloat(this.vols.lng);
        this.hora_inicio = this.vols.start_time.slice(0,2);
        this.minutos_inicio = this.vols.start_time.slice(3,5);
        this.hora_fim = this.vols.end_time.slice(0,2);
        this.minutos_fim = this.vols.end_time.slice(3,5);
      })
      .catch(err => console.log(err));
  }

  getCandidates(idVol) {
    this.detailsservice.getCandidates(idVol, 3)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }
  
  getConfirmed(idVol) {
    this.detailsservice.getConfirmed(idVol, 3)
      .then(res => {
        this.confirmeds = res.users;
      })
      .catch(err => console.log(err));
  }

    getAddress() {
        this.detailsservice.getAddress(this.vols.lat, this.vols.lng)
        .then(res => {
          this.addressData = res.results;
           this.address[this.vols.id_vol] = this.addressData[0].formatted_address;
          this.addressName[this.vols.id_vol] = this.addressData[0].address_components[0].short_name;
        })
       
  }

  openViewAll(type, idVol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({type: type, idVol: idVol}, BSModalContext));

  }

   openRemoveConfirm(type, idVol, idUser, name) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, name: name, idVol:idVol, idUser:idUser}, BSModalContext));
  }
  
  openEnd(type, idVol) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ idVol: idVol, type: type}, BSModalContext));

  }

  confirmCandidate(id_user) {
    this.detailsservice.confirmCandidate(this.vols.id_vol, id_user)
    .then(res => {
      console.log(res);
    })
  }

}
