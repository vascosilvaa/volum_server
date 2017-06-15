import { EditModalComponent } from './../../../shared/edit-modal/edit-modal.component';
import { volsService } from './../../../shared/services/vols.service';
import { SharedService } from './../../../shared/services/shared.service';
import { ProfileService } from './../../../shared/services/profile.service';
import { ModalEndComponent } from './../../../shared/modal-end/modal-end.component';
import { ModalViewAllComponent } from './../../../shared/modal-view-all/modal-view-all.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Http } from '@angular/http';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ProfileService, volsService]
})
export class DetailsComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  lat: number;
  lng: number;

  public idLogin: any;
  public userLogin: any;
  public id_vol: any;
  public vol: any;
  public candidates = [];
  public confirmeds = [];
  public numberComments: any;
  public comments = [];
  public comentario: any;
  public numberCandidates: any;
  public numberConfirms: any;
  public editTitle: any;
  public confirmedsReady: boolean = false;
  public address: any;

  constructor(public route: ActivatedRoute, public http: Http, overlay: Overlay, vcRef: ViewContainerRef,
    public modal: Modal, private sharedService: SharedService, private auth: AuthenticationService,
    private router: Router, private ProfileService: ProfileService, public volsService: volsService, public SharedService: SharedService) {
  }

  ngAfterViewChecked() {
      this.scrollToBottom();
    }

    scrollToBottom(): void {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) { }
    }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id_vol = this.route.snapshot.params['id'];
      this.idLogin = this.route.parent.parent.snapshot.params['id'];
    });
    this.getVol(this.id_vol);
    this.getCandidates(this.id_vol);
    this.getConfirmed(this.id_vol);
    this.countComments(this.id_vol);
    this.countCandidates(this.id_vol);
    this.countConfirmed(this.id_vol);


  }


  openEditModal() {
    return this.modal.open(EditModalComponent, overlayConfigFactory({ id_vol: this.id_vol }, BSModalContext));
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

      this.volsService.sendComment(comment, this.id_vol).then(res => {
        this.comentario = '';
        this.numberComments++;
        this.comments.push({
          id_user: this.vol.user.id_user,
          message: comment,
          photo_url: this.vol.user.photo_url,
          name: this.vol.user.name,
        })
      });

    }
  }

  countComments(id_vol) {
    this.volsService.countComments(id_vol)
      .then(res => {
        this.numberComments = res.count;
        if (this.numberComments > 0) {
          this.getComments(id_vol);
        }
      })
      .catch(err => console.log(err));
  }

  getComments(id_vol) {
    this.volsService.getComments(id_vol)
      .then(res => {
        this.comments = res.comments;
      })
      .catch(err => console.log(err));
  }

  getVol(id_vol) {
    this.volsService.getVol(id_vol)
      .then(res => {
        this.vol = res.vol;
        console.log("VOL", this.vol);
        this.lat = parseFloat(this.vol.lat);
        this.lng = parseFloat(this.vol.lng);
        this.getAddress();
       



        if (this.vol.active == 0) {
          this.volsService.getScores(this.id_vol).then(res => {
            console.log("RES", res)
            for (let i = 0; i < this.confirmeds.length; i++) {
              for (let x = 0; x < res.results.length; x++) {
                if (this.confirmeds[i].id_user == res.results[x].id_user2) {
                  this.confirmeds[i].classification = this.getNumber(res.results[x].classification);
                  this.confirmeds[i].classification_negative = this.getNumber(res.results[x].classification - 5)
                }
              }
            }
            this.confirmedsReady = true;
            console.log("CONFIRMEDS", this.confirmeds)
          })
        }
      })
      .catch(err => console.log(err));
  }

  getNumber = function (num) {
    let number = Math.round(num);
    if (num < 0) {
      number = Math.abs(number);
    }

    return new Array(number);
  }

  getCandidates(id_vol) {
    this.volsService.getCandidates(id_vol, 3)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

  getConfirmed(id_vol) {
    this.volsService.getConfirmed(id_vol, 3)
      .then(res => {
        this.confirmeds = res.users;
      })
      .catch(err => console.log(err));
  }

  getAddress() {
    this.sharedService.getAddress(this.vol.lat, this.vol.lng)
      .then(res => {
        this.address = res.results[0].formatted_address;
      })

  }

  openViewAll(type, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_vol: id_vol }, BSModalContext));

  }

  openRemoveConfirm(type, id_vol, id_user, name, i) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, name: name, id_vol: id_vol, id_user: id_user, index: i }, BSModalContext)).then((d) => d.result)
      .then((r) => {
        console.log(r);
        let index = this.candidates.findIndex(x => x.id_user == id_user);
        this.confirmeds.splice(index, 1);
        this.numberConfirms--;
      },
      (error) => { console.log(error); });
  }

  openDelete(type, id_vol, date, name) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ type: type, id_vol: id_vol, date: date, name: name }, BSModalContext));
  }

  openRemoveConfirmCandidate(type, id_vol, id_user, name, i) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, name: name, id_vol: id_vol, id_user: id_user, index: i }, BSModalContext)).then((d) => d.result)
      .then((r) => {
        console.log(r);
        let index = this.candidates.findIndex(x => x.id_user == id_user);
        this.candidates.splice(index, 1);
        this.numberCandidates--;
      },
      (error) => { console.log(error); });
  }

  openEnd(type, id_vol) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ id_vol: this.id_vol, type: type }, BSModalContext));

  }

  confirmCandidate(id_user) {
    this.volsService.confirmCandidate(this.vol.id_vol, id_user)
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
