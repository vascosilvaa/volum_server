import { ChatService } from './../../../shared/services/chat.service';
import { SocketService } from './../../../shared/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {


  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  public id_user: Number;
  public id_conversation: Number;
  public messages = [];
  public message: string;
  public conversationName: string;
  public profile: any;
  constructor(public router: Router ,public chatService: ChatService, public auth: AuthenticationService, private socket: SocketService, public activatedRoute: ActivatedRoute) { }

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
          this.id_conversation = params.id;
          this.getProfile(this.id_conversation);
          this.socket.joinRoom(params.id);
          this.getMessages(params.id);
        });
      });

    }
    this.scrollToBottom();

    this.socket.onMessage().subscribe((res: any) => {
      console.log("rees", res);
      if (res.from_id == this.id_user) {


      } else {
        this.messages.push({
          from_id: res.from_id,
          message: res.message
        })
      }

    });

  }

  navigate_profile(profile) {
    this.router.navigate(['/profile/' + profile + '/activity']);
  }

  getProfile(id_conversation) {
    this.chatService.getProfile(id_conversation).then(res => {
      this.profile = res.result;
      console.log(this.profile);
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getMessages(id_conversation) {
    this.chatService.getMessages(this.id_conversation).then(res => {
      this.messages = res.messages;
      console.log("messages", this.messages);


    });
  }

  sendMessage(message) {
    if (typeof message == 'string' && message.length > 0 && message && message.replace(/^\s+/g, '').length) {

      this.chatService.sendMessage(this.id_conversation, message).then(res => {
        this.message = '';
        this.messages.push({
          from_id: this.id_user,
          message: message
        })
      });

    }

  }

}
