import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { VolDetailsModalService } from './vol-details-modal.service';
import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
    public idVol: any;
    public type: any;
}

@Component({
  selector: 'modal-end',
  templateUrl: './modal-end.component.html',
  styleUrls: ['./modal-end.component.scss'],
  //providers: [VolDetailsModalService]
})


export class ModalEndComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  public volDetails: any;
  public evaluation: any;
  
  public one: any;
  public eval1 = Array;
  public eval2 = Array;
  public eval3 = Array;
  public eval4 = Array;
  public eval5 = Array;

  public people = [
    {
    'id': 0,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },{
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  },
  {
    'id': 1,
    'eval': 'NULL'
  }
  
  ]



  context: ModalContext;


  constructor(private dialog: DialogRef<ModalContext>/*, private volsService: VolDetailsModalService*/) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    if(this.context.type==1) {

    } else if (this.context.type==2) {
      this.context.size = "lg";
    }
    this.one = 1;
    
  }

  ngOnInit() {
    this.evaluation=1;
    console.log(this.context.idVol);  
     /*this.volsService.getVol(this.context.idVol)
      .then(res => {
        this.volDetails = res.vol;
        console.log(this.volDetails);
      })
      .catch(err => console.log(err));
      */

  }

  ev(id, estrela) {
    this.people[id].eval=estrela;
  }


}
