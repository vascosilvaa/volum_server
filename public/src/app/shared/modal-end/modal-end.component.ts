import { SharedService } from './../shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { VolDetailsModalService } from './vol-details-modal.service';
import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
    public idVol: any;
    public type: any;
    public date: any;
    public name: any;
    public idUser: any;
}

@Component({
  selector: 'modal-end',
  templateUrl: './modal-end.component.html',
  styleUrls: ['./modal-end.component.scss'],
  providers: [SharedService]
})


export class ModalEndComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  public volDetails: any;
  public evaluation: any;
  public evalAll: any;
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


  constructor(private dialog: DialogRef<ModalContext>, private SharedService: SharedService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    if(this.context.type==1) {

    } else if (this.context.type==2) {
      this.context.size = "lg";
    }
    
  }

  ngOnInit() {
    if(this.context.type==2){
    this.evaluation=1;
    this.evalAll=0;
    }
 }

  deleteAction(id_vol) {
      this.SharedService.deleteAction(id_vol).then(
        res => {
        console.log(res);
      }
      )
  }

  ev(id, estrela) {
    this.people[id].eval=estrela;
  }

  evAll(estrela) {
    this.evalAll = estrela;
    for(let i = 0; i <= this.people.length; i++) {
      this.people[i].eval = this.evalAll;
    }
  }
  
  close() {
    this.dialog.dismiss();
  }


}
