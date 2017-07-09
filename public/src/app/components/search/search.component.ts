import { ModalProfileComponent } from './../../shared/modal-profile/modal-profile.component';
import { volsService } from './../../shared/services/vols.service';
import { FeedComponent } from './../feed/feed.component';
import { VolDetailsModalComponent } from './../../shared/vol-details-modal/vol-details-modal.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Params,ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { AuthenticationService } from './../../shared/Auth/authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [volsService, FeedComponent]
})
export class SearchComponent implements OnInit {
  public search_query: any;
  public searchResult: any;
  public model: any;
  public elements: any;
  public login: any;
  constructor(public auth: AuthenticationService, public volsService: volsService , public modal: Modal, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     if (this.auth.isAuthenticated()) {
      this.login = 1;
    } else {
      this.login = 0;
    }
      this.model = "";
      this.route.params.subscribe((params) => {
      this.search_query = this.route.snapshot.params['q'];
      console.log(this.search_query)
    });
    
      this.search(this.search_query);

  }

  

  search(query) {
    console.log(query);
    this.volsService.search(query, 0, 100 ).then(res => {
        this.searchResult = res;
        if (this.searchResult.success==true) {
          this.elements = this.searchResult.message;
        } else {
          this.elements = 0;
        }
      })
      .catch(err => console.log(err));
  }

  

  openVolDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol }, BSModalContext));
  }

  openUser(id_user) {
    return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: id_user }, BSModalContext));
  }
}
