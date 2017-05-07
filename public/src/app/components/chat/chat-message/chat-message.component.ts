import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  public id_user: Number;
  public id_user2: Number;
  public messages = [];
  public message: string;
  constructor(public chatService: ChatService, public auth: AuthenticationService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.id_user = res.user.id_user;
        this.activatedRoute.params.subscribe((params) => {
          this.id_user2 = params.id;
          this.getMessages(params.id);
        });
      });

    }
  }

  getMessages(id_user) {
    this.chatService.getMessages(this.id_user, id_user).then(res => {
      this.messages = res.messages;
      console.log("messages", this.messages);

    });
  }
  sendMessage(message) {
    this.chatService.sendMessage(this.id_user, this.id_user2, message).then(res => {
      this.message = '';
      this.messages.push({
        id_user: this.id_user,
        id_user2: this.id_user2,
        message: message
      })
    });

  }

}
