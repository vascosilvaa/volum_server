import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { Overlay } from 'angular2-modal';

@Component({
  selector: 'app-classifications',
  templateUrl: './classifications.component.html',
  styleUrls: ['./classifications.component.scss']
})
export class ClassificationsComponent implements OnInit {

  constructor(public overlay: Overlay, vcRef: ViewContainerRef) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

}
