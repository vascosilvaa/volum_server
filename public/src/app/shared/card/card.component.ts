import { SharedService } from './../shared.service';
import { SharedModule } from './../shared.module';
import { VolDetailsModalComponent } from './../vol-details-modal/vol-details-modal.component';
import { Component, ViewContainerRef, OnInit, Input} from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'vol-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() type;
  @Input() userCreator;
  @Input() dateCreation;
  @Input() title;
  @Input() desc;
  @Input() avatar;
  @Input() username;
  @Input() verified;
  @Input() map;
  @Input() likes;
  @Input() idVol;

  public foto1=1;
  public foto2=0;
  public foto3=0;
  public comments=0;
  public commentsResult;

  
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
  private router: Router) {
    overlay.defaultViewContainer = vcRef;
   }

  ngOnInit() {    
    this.sharedService.getComments(this.idVol)
      .then(res => {
        this.commentsResult = res.vols;
        console.log(this.commentsResult);
      })
      .catch(err => console.log(err));
  } 
  
  openComments() {
    if(this.comments==0) {
      this.comments=1;
    } else {
    this.comments=0;
    }
  }

  openVolDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: this.idVol}, BSModalContext));

  }

    onSelect(profile) {
    this.router.navigate(['/profile/' + profile + '/activity']);
  }

  changePhoto1(){
    this.foto1=1;
    this.foto3=0;
    this.foto2=0;
  }
  changePhoto2(){
    this.foto1=0;
    this.foto2=1;
    this.foto3=0;
  }
  changePhoto3(){
    this.foto1=0;
    this.foto2=0;
    this.foto3=1;
  }

  showFoto(foto) {
    if (foto==1) {
      this.foto1=1;
      this.foto2=0;
      this.foto3=0;
    }
     if (foto==2) {
      this.foto1=0;
      this.foto2=1;
      this.foto3=0;
    }
    if (foto==3) {
      this.foto1=0;
      this.foto2=0;
      this.foto3=1;
    }
  }
}
