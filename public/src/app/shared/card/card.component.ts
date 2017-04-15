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

  public foto1=1;
  public foto2=0;
  public foto3=0;

  
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal,   private router: Router) {
    overlay.defaultViewContainer = vcRef;
   }

  ngOnInit() {  }

  openVolDetails() {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
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
