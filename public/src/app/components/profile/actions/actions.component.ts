import { ProfileService } from './../profile.service';
import { Http } from '@angular/http';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  invite=0;
   public idProfile: any;
  public user: any;
  public userLogin: any;
  public idLogin: any;
  constructor(public route: ActivatedRoute, public http: Http, private profileService: ProfileService,
  private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  /*this.route.params.subscribe((params) => {
      this.idProfile = this.route.parent.snapshot.params['id'];
      this.profileService.getProfile(this.idProfile).then(res => {
        this.user = res.user;
      });

    });
    this.getUser();
  }
  getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.userLogin = res.user;
        let id = localStorage.getItem('USER_ID');
        this.idLogin = id;
       }
      );

    }
  }
  onSelect(profile) {
    this.router.navigate(['/profile/' + profile + '/details']);
  }
*/ }
}
