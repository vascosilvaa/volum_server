import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from './../../../shared/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],

})
export class SettingsComponent implements OnInit {

  public showPersonal: boolean = false;
  public showMessages: boolean = false;
  public showPrivacity: boolean = false;



  public personalSettings = 1;
  public messagesSettings = 0;
  public privateSettings = 0;
  public idProfile: any;

  public countries = []
  constructor(public route: ActivatedRoute, private profileService: ProfileService) {
  }

  ngOnInit() {

    this.showPersonal = true;

    this.route.params.subscribe((params) => {
      this.idProfile = this.route.parent.parent.snapshot.params['id'];


    });
  }

  openPersonal() {
    this.showPersonal = !this.showPersonal;
  }

  openMessages() {
    this.showMessages = !this.showMessages;
  }

  openPrivacy() {
    this.showPrivacity = !this.showPrivacity;
  }


  /*
    openPersonal() {
      if (this.personalSettings == 1) {
        this.personalSettings = 0;
      } else if (this.personalSettings == 0) {
        this.personalSettings = 1;
        this.messagesSettings = 0;
        this.privateSettings = 0;
      }
    }
  
    openMessages() {
      if (this.messagesSettings == 1) {
        this.messagesSettings = 0;
      } else if (this.messagesSettings == 0) {
        this.personalSettings = 0;
        this.messagesSettings = 1;
        this.privateSettings = 0;
      }
    }
    openPrivacy() {
      if (this.privateSettings == 1) {
        this.privateSettings = 0;
      } else if (this.privateSettings == 0) {
        this.personalSettings = 0;
        this.messagesSettings = 0;
        this.privateSettings = 1;
      }
    }
  */
}
