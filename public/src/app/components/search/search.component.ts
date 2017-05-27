import { FeedService } from './../feed/feed.service';
import { Params,ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FeedService]
})
export class SearchComponent implements OnInit {
  public search_query: any;
  public searchResult: any;
  public model: any;
  public elements: any;
  constructor(public feedService: FeedService ,private route: ActivatedRoute, private router: Router) { }

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
        }
      })
      .catch(err => console.log(err));
  }
}
