import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { ChatService } from './chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  public searchAtive = 0;
  public id_user: Number;
  public conversations = [];
  constructor(public chatService: ChatService, public auth: AuthenticationService) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.id_user = res.user.id_user;
        this.getConversations(this.id_user);

      });

    }
  }

  getConversations(id_user) {
    this.chatService.getConversations(id_user).then(res => {
      this.conversations = res.conversations;
      console.log(this.conversations);

    });

  }

  activeSearch() {
    if (this.searchAtive) {
      this.searchAtive = 0;
    } else if (!this.searchAtive) {
      this.searchAtive = 1;
    }
  }
}
