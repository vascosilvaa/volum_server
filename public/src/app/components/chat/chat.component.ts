import { ProfileService } from './../profile/profile.service';
import { SocketService } from './../../shared/socket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { ChatService } from './chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService, ProfileService]
})
export class ChatComponent implements OnInit {
  public searchAtive = 0;
  public id_user: Number;
  public conversations = [];

  constructor(public chatService: ChatService, public route: ActivatedRoute, public socket: SocketService, public router: Router, public auth: AuthenticationService, private profileService: ProfileService) { }

  ngOnInit() {

    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.id_user = res.user.id_user;
        this.getConversations();
      });

    }
  }

  getConversations() {
    this.chatService.getConversations().then(res => {
      this.conversations = res.conversations;
      console.log("CONVERSATIONS", this.conversations);
      this.getUsers();
    });

  }

  navigate(id, name) {
    console.log(id);

    this.chatService.conversation = name;
    this.router.navigate(['./msg', id], { relativeTo: this.route });
    this.socket.joinRoom(id);

  }

  getUsers() {
    for (let i = 0; i < this.conversations.length; i++) {

      this.profileService.getProfile(this.conversations[i].id_user).then(res => {
        this.conversations[i].photo_url = res.user.photo;
        this.conversations[i].name = res.user.username;
        console.log(res);
      });

    }
  }

  activeSearch() {
    if (this.searchAtive) {
      this.searchAtive = 0;
    } else if (!this.searchAtive) {
      this.searchAtive = 1;
    }
  }
}
