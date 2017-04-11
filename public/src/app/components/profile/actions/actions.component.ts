import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  invite=0;
  public userLogin: any;
  public idLogin: any;
  constructor(public router: Router,  private auth: AuthenticationService) { }

  ngOnInit() {
    
  }
}
