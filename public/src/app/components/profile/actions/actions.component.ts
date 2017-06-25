import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  constructor(public overlay: Overlay, vcRef: ViewContainerRef) {
        overlay.defaultViewContainer = vcRef;

   }

  ngOnInit() { }
}
