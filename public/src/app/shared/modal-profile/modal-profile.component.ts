import { SharedService } from './../services/shared.service';
import { ProfileService } from './../services/profile.service';
import { VolDetailsModalComponent } from './../vol-details-modal/vol-details-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { RouterModule, Router } from '@angular/router';

export class ModalContext extends BSModalContext {
  public idVol: any;
  public idProfile: any;
  public inProfile: any;
}

@Component({
  selector: 'modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.scss'],
  //providers: [VolDetailsModalService]
})


export class ModalProfileComponent implements OnInit {
  public user: any;


  context: ModalContext;


  constructor(private router: Router, public modal: Modal, public sharedService: SharedService, private dialog: DialogRef<ModalContext>, private profileService: ProfileService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.getUser();
    }, 250)
  }


  getUser() {

    this.sharedService.getProfile(this.context.idProfile)
      .then(res => {
        this.user = res.user;
        this.profileService.getScore(this.user.id_user).then(res => {
        this.user['score_number'] = res.score;
        this.user['score'] = this.getNumber(res.score);
        this.user['negative_score'] = this.getNumber(res.score - 5);
    });
      })
      .catch(err => console.log(err));

  }

  onSelect(profile) {
    if(this.context.inProfile==1) {
      this.dialog.dismiss();
      setTimeout(() => {
        this.router.navigate(['/profile/' + this.context.idProfile + '/activity']);
      }, 250);
    } else {
      this.router.navigate(['/profile/' + this.context.idProfile + '/activity']);
      this.dialog.close("done");
    }
  }

  close() {
    this.dialog.dismiss();
  }

  getNumber(num) {
    let number = Math.round(num);
    if (num < 0) {
      number = Math.abs(number);
    }
    return new Array(number);
  }
}
