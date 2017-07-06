import { Component, OnInit } from '@angular/core';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { volsService } from './../services/vols.service';
import { ProfileService } from './../services/profile.service';
import { AuthenticationService } from './../Auth/authentication.service';

export class ModalContext extends BSModalContext {
  public id_vol: any;
}

@Component({
  selector: 'app-modal-invite',
  templateUrl: './modal-invite.component.html',
  styleUrls: ['./modal-invite.component.scss']
})


export class ModalInviteComponent implements OnInit {

  context: ModalContext;
  public id_vol: any;
  public invites: any;
  public follows: any;
  public id_user: any;
  public invited = [];

  constructor(private dialog: DialogRef<ModalContext>, public volsService: volsService, public profileService: ProfileService, public auth: AuthenticationService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
  }

  ngOnInit() {
    this.auth.userPromise.then(res => {
      console.log(res);
      this.id_user = res.user.id_user;
      this.getInvites();
    });
  }

  getInvites() {
    this.volsService.getInvites(this.context.id_vol).then(res => {
      this.invites = res.results;
      console.log("invites --->", this.invites);
      this.profileService.listFollows(this.id_user, 1).then(res => {
        this.follows = res.users;
        console.log("follows --->" ,this.follows);
        for (let i = 0; i < this.follows.length; i++) {
          let index = this.invites.findIndex(x => x.id_user == this.follows[i].id_user);
          if(index >= 0){
            this.follows[i].isInvited = true;
          }

        }
        console.log("follow",this.follows);
      });
    });
  }

  invite(id_user) {
    this.invited.push(id_user);
    console.log(this.invited);
    this.volsService.insertInvite(this.context.id_vol, this.invited).then(res => {
      console.log('deu');
      this.invited = [];
    });
  }
}
