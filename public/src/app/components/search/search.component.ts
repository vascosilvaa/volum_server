import { FeedComponent } from './../feed/feed.component';
import { VolDetailsModalComponent } from './../../shared/vol-details-modal/vol-details-modal.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { FeedService } from './../feed/feed.service';
import { Params,ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FeedService, FeedComponent]
})
export class SearchComponent implements OnInit {
  public search_query: any;
  public searchResult: any;
  public model: any;
  public elements: any;
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public feedService: FeedService , public modal: Modal, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.model = "";
      this.route.params.subscribe((params) => {
      this.search_query = this.route.snapshot.params['q'];
      console.log(this.search_query)
    });
    this.search(this.search_query);
  }

  search(query) {
    console.log(query);
    this.feedService.search(query).then(res => {
        this.searchResult = res;
        console.log(this.searchResult);
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
}
