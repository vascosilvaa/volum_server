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
}
