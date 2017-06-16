import { volsService } from './../services/vols.service';
import { SharedService } from './../services/shared.service';
import { DetailsComponent } from './../../components/profile/details/details.component';
import { FeedComponent } from './../../components/feed/feed.component';
import { VolDetailsModalComponent } from './../vol-details-modal/vol-details-modal.component';
import { AppModule } from './../../app.module';
import { Component, OnInit, Injector } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

export class ModalContext extends BSModalContext {
  public id_vol: any;
  public type: any;
  public id_user: any;
  public nameVol: any;
  public index?: any;

}

@Component({
  selector: 'view-all-modal',
  templateUrl: './modal-view-all.component.html',
  styleUrls: ['./modal-view-all.component.scss'],
})


export class ModalViewAllComponent implements OnInit {
  public volDetails: any;
  public candidates;
  public confirmeds;
  public likes;
  public main_modal;
  public detailsPage;
  public confirmedArray = []
  context: ModalContext;


  constructor(public route: ActivatedRoute, private router: Router, private dialog: DialogRef<ModalContext>, private injector: Injector, private volsService: volsService, public SharedService: SharedService) {

    this.context = dialog.context;
    this.context.isBlocking = false;

  }

  ngOnInit() {
    console.log(this.context.id_vol);
    //  this.main_modal = this.injector.get(VolDetailsModalComponent);


    if (this.context.type == 1) { // Ver Candidatos
      this.getCandidates(this.context.id_vol);
    } else if (this.context.type == 2) { // Ver confirmados
      this.getConfirmed(this.context.id_vol);
    } else if (this.context.type == 6) { // Confirmar cancelar candidatura
      console.log(this.context.type, this.context.nameVol, this.context.id_user, this.context.id_vol);
    } else if (this.context.type == 7) { //Confirmar candidatura

    } else if (this.context.type == 8) { // Ver likes
      this.getLikes(this.context.id_vol);
    }


  }

  onSelect(profile) {
    this.dialog.dismiss();
    setTimeout(() => {
        this.router.navigate(['/profile/' + profile + '/activity']);
      }, 250);
  }

  getLikes(id_vol) {
    this.SharedService.getLikes(id_vol)
      .then(res => {
        this.likes = res.body;
      })
      .catch(err => console.log(err));
  }

  getCandidates(id_vol) {
    this.SharedService.getCandidates(id_vol, 50)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

  getConfirmed(id_vol) {
    this.SharedService.getConfirmed(id_vol, 50)
      .then(res => {
        this.confirmeds = res.users;
        console.log(this.confirmeds)
      })
      .catch(err => console.log(err));
  }



  apply(id_vol) {
    console.log(id_vol);
    this.volsService.apply(this.context.id_user, id_vol).then(res => {
      this.dialog.close("applied");

    });
  }
  cancelApply(id_vol) {
    console.log(id_vol);
    this.volsService.cancelApply(this.context.id_user, id_vol).then(res => {
      this.dialog.close("canceled");
    });
  }

  close() {
    this.dialog.dismiss();
  }

  denyCandidate(id_user) {
    this.SharedService.denyCandidate(this.context.id_vol, id_user)
      .then(res => {
        this.dialog.close(1)
      })
  }




}


