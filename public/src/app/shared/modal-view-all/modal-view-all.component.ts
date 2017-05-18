import { SharedService } from './../shared.service';
// import { VolDetailsModalService } from './vol-details-modal.service';
import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
    public idVol: any;
    public type: any;
    public id_user: any;
    public nameVol: any;

}

@Component({
  selector: 'view-all-modal',
  templateUrl: './modal-view-all.component.html',
  styleUrls: ['./modal-view-all.component.scss'],
  //providers: [VolDetailsModalService]
})


export class ModalViewAllComponent implements OnInit {
  public volDetails: any;
  public candidates;
  public confirmeds;
  public likes;

  context: ModalContext;

  constructor(private dialog: DialogRef<ModalContext>, /*private volsService: VolDetailsModalService,*/ public SharedService: SharedService ) {
    this.context = dialog.context;
    this.context.isBlocking = false; 
  }

  ngOnInit() {
    if(this.context.type==1) { // Ver Candidatos
      this.getCandidates(this.context.idVol);
    } else if (this.context.type==2){ // Ver confirmados
      this.getConfirmed(this.context.idVol);
    } else if (this.context.type==6) { // Confirmar cancelar candidatura
      console.log(this.context.type, this.context.nameVol, this.context.id_user, this.context.idVol);
    } else if(this.context.type==7) { //Confirmar candidatura

    } else if(this.context.type==8) { // Ver likes
      this.getLikes(this.context.idVol);
    }

   
}

  getLikes(idVol) {
    this.SharedService.getLikes(idVol)
    .then(res => {
        this.likes = res.body;
      })
      .catch(err => console.log(err));
  }

  getCandidates(idVol) {
    this.SharedService.getCandidates(idVol, 50)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

   getConfirmed(idVol) {
    this.SharedService.getConfirmed(idVol, 50)
      .then(res => {
        this.confirmeds = res.users;
        console.log(this.confirmeds)
      })
      .catch(err => console.log(err));
  }
  
}
/*
     this.volsService.getVol(this.context.idVol)
      .then(res => {
        this.volDetails = res.vol;
        console.log(this.volDetails);
      })
      .catch(err => console.log(err));
  }
*/

