import { SharedService } from './../shared.service';
// import { VolDetailsModalService } from './vol-details-modal.service';
import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
    public idVol: any;
    public type: any;

    


}

@Component({
  selector: 'view-all-modal',
  templateUrl: './modal-view-all.component.html',
  styleUrls: ['./modal-view-all.component.scss'],
  //providers: [VolDetailsModalService]
})


export class ModalViewAllComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  public volDetails: any;
  public candidates;
  public confirmeds;

  context: ModalContext;


  constructor(private dialog: DialogRef<ModalContext>, /*private volsService: VolDetailsModalService,*/ public SharedService: SharedService ) {
    this.context = dialog.context;
    this.context.isBlocking = false;

  
  
  }

  ngOnInit() {
    if(this.context.type==1) {
      this.getCandidates(this.context.idVol);
    } else if (this.context.type==2){
      this.getConfirmed(this.context.idVol);
    }

      
   
}

  getCandidates(idVol) {
    this.SharedService.getCandidates(idVol)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

   getConfirmed(idVol) {
    this.SharedService.getConfirmed(idVol)
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

