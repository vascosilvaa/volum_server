import { volsService } from './../../../shared/services/vols.service';
import { SharedService } from './../../../shared/services/shared.service';
import { ProfileService } from './../../../shared/services/profile.service';
import { DetailsService } from './details.service';
import { ModalEndComponent } from './../../../shared/modal-end/modal-end.component';
import { ModalViewAllComponent } from './../../../shared/modal-view-all/modal-view-all.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Http } from '@angular/http';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ProfileService, volsService]
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
  public address = [];
  public addressName = [];
  public candidates = [];
  public confirmeds = [];
  public numberComments: any;
  public comments = [];
  public comentario: any;
  public numberCandidates: any;
  public numberConfirms: any;
  constructor(public route: ActivatedRoute, public http: Http, overlay: Overlay, vcRef: ViewContainerRef,
    public modal: Modal, private sharedService: SharedService, private auth: AuthenticationService,
    private router: Router, private ProfileService: ProfileService, public volsService: volsService, public SharedService: SharedService) {
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
    this.countCandidates(this.idVol);
    this.countConfirmed(this.idVol);
  }

  countCandidates(id_vol) {
    this.volsService.countCandidates(id_vol)
      .then(res => {
        this.numberCandidates = res.count;
      })
      .catch(err => console.log(err));
  }

  countConfirmed(id_vol) {
    this.volsService.countConfirmeds(id_vol)
      .then(res => {
        this.numberConfirms = res.count;
      })
      .catch(err => console.log(err));
  }

  sendComment(comment) {
    if (typeof comment == 'string' && comment.length > 0 && comment && comment.replace(/^\s+/g, '').length) {

      this.volsService.sendComment(comment, this.idVol).then(res => {
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
    this.volsService.countComments(idVol)
      .then(res => {
        this.numberComments = res.count;
        if (this.numberComments > 0) {
          this.getComments(idVol);
        }
      })
      .catch(err => console.log(err));
  }

  getComments(idVol) {
    this.volsService.getComments(idVol)
      .then(res => {
        this.comments = res.comments;
      })
      .catch(err => console.log(err));
  }

  getVol(idVol) {
    this.volsService.getVol(idVol)
      .then(res => {
        this.vols = res.vol;
        this.getAddress();
        this.lat = parseFloat(this.vols.lat);
        this.lng = parseFloat(this.vols.lng);
        this.hora_inicio = this.vols.start_time.slice(0, 2);
        this.minutos_inicio = this.vols.start_time.slice(3, 5);
        this.hora_fim = this.vols.end_time.slice(0, 2);
        this.minutos_fim = this.vols.end_time.slice(3, 5);
      })
      .catch(err => console.log(err));
  }

  getCandidates(idVol) {
    this.volsService.getCandidates(idVol, 3)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

  getConfirmed(idVol) {
    this.volsService.getConfirmed(idVol, 3)
      .then(res => {
        this.confirmeds = res.users;
      })
      .catch(err => console.log(err));
  }

  getAddress() {
    this.sharedService.getAddress(this.vols.lat, this.vols.lng)
      .then(res => {
        this.addressData = res.results;
        this.address[this.vols.id_vol] = this.addressData[0].formatted_address;
        this.addressName[this.vols.id_vol] = this.addressData[0].address_components[0].short_name;
      })

  }

  openViewAll(type, idVol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, idVol: idVol }, BSModalContext));

  }

  openRemoveConfirm(type, idVol, idUser, name, i) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, name: name, idVol: idVol, idUser: idUser, index: i }, BSModalContext)).then((d) => d.result)
      .then((r) => {
        console.log(r);
        let index = this.candidates.findIndex(x => x.id_user == idUser);
        this.confirmeds.splice(index, 1);
         this.numberConfirms--;
      },
      (error) => { console.log(error); });
  }

   openDelete(type, id_vol, date, name) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ type: type, idVol: id_vol, date: date, name: name}, BSModalContext));
  }

  openRemoveConfirmCandidate(type, idVol, idUser, name, i) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, name: name, idVol: idVol, idUser: idUser, index: i }, BSModalContext)).then((d) => d.result)
      .then((r) => {
        console.log(r);
        let index = this.candidates.findIndex(x => x.id_user == idUser);
        this.candidates.splice(index, 1);
        this.numberCandidates--;
      },
      (error) => { console.log(error); });
  }

  openEnd(type, idVol) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ idVol: idVol, type: type }, BSModalContext));

  }

  confirmCandidate(id_user) {
    this.volsService.confirmCandidate(this.vols.id_vol, id_user)
      .then(res => {
        let index = this.candidates.findIndex(x => x.id_user == id_user);
        this.confirmeds.unshift(this.candidates[index])
        this.candidates.splice(index, 1);
        this.numberConfirms++;
        this.numberCandidates--;
        console.log(res);
      })
  }

}
