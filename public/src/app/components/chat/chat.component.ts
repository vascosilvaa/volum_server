import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public searchAtive=0;
  constructor() { }

  ngOnInit() {
  }

  activeSearch() {
    if(this.searchAtive){
      this.searchAtive=0;
    } else if(!this.searchAtive){
      this.searchAtive=1;
    }
  }
}
