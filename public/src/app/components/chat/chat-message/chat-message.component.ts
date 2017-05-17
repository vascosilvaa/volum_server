import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { ChatService } from './../chat.service';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {


  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  public id_user: Number;
  public id_user2: Number;
  public messages = [];
  public message: string;
  public conversationName: string;
  constructor(public chatService: ChatService, public auth: AuthenticationService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.conversationName = this.chatService.conversation;
    this.chatService.conversationUpdate.subscribe(name => {
      this.conversationName = name;
      console.log("NAME", name)
    });


    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.id_user = res.user.id_user;
        this.activatedRoute.params.subscribe((params) => {
          this.id_user2 = params.id;
          this.getMessages(params.id);
        });
      });

    }
    this.scrollToBottom();

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getMessages(id_user) {
    this.chatService.getMessages(this.id_user, id_user).then(res => {
      this.messages = res.messages;
      console.log("messages", this.messages);


    });
  }
  sendMessage(message) {
    if (typeof message == 'string' && message.length > 0 && message && message.replace(/^\s+/g, '').length) {

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

}
