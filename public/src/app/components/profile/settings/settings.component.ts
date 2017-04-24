import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],

})
export class SettingsComponent implements OnInit {
  personalSettings=1;
  constructor() {
  }

  ngOnInit() {
    
  }

  openPersonal() {
    if(this.personalSettings==1) {
      this.personalSettings=0;
    } else if (this.personalSettings==0) {
      this.personalSettings=1;
    }
  }

}
