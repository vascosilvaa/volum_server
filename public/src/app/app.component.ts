import { ProfileService } from './components/profile/profile.service';
import { ChatService } from './components/chat/chat.service';
import { AppService } from './app.service';
import { SocketService } from './shared/socket.service';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './shared/Auth/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SocketService, AppService, ChatService, ProfileService]
})
export class AppComponent implements OnInit {

  public notification = new Audio();
  public isLoggedIn;
  public user: any;
  public idLogin: any;
  public newNotificationCount: number;
  public newRequestsCount: number;
  public conversations = [];
  public notifications = [];
  public requests = [];

  constructor(overlay: Overlay, public route: ActivatedRoute, vcRef: ViewContainerRef, public modal: Modal,
    private router: Router, private auth: AuthenticationService,
    private socketService: SocketService, private appService: AppService, private chatService: ChatService,
    private profileService: ProfileService) {
    overlay.defaultViewContainer = vcRef;
    this.notification.src = "http://www.wavsource.com/snds_2017-05-21_1278357624936861/sfx/boing_x.wav";

  }
  ngOnInit() {



    moment.locale('pt-pt');
    moment.updateLocale('pt', {
      relativeTime: {
        future: "in %s",
        past: "%s",
        s: "Agora mesmo",
        m: "1 min",
        mm: "%d m",
        h: "1h",
        hh: "%d hrs",
        d: "1 dia",
        dd: "%d dias",
        M: "1 mês",
        MM: "%d meses",
        y: "1 ano",
        yy: "%d anos"
      }
    });



    this.getUser();

  }

  getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.user = res.user;
        this.socketService.onNotification().subscribe(res => {
          this.newNotificationCount++;
          console.log("NEW NOTIFICATION", res);
          this.notification.play();

        });

        this.socketService.onRequest().subscribe(res => {
          this.newRequestsCount++;
          console.log("NEW REQUEST", res);

          this.notification.play();

        });

        this.socketService.onConnect(res.user.id_user);
        this.getNotificationCount(res.user.id_user);
        this.getRequestCount(res.user.id_user);
        let id = localStorage.getItem('USER_ID');
        this.idLogin = id;
      }
      );
    }
  }

  getConversations() {
    this.chatService.getConversations().then(res => {
      this.conversations = res.conversations;
      console.log("Conversations", this.conversations);
      this.getUsers();

    });
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

  getNotificationCount(id) {
    this.appService.newNotificationCount(id).then(res => {
      this.newNotificationCount = res.count;
      console.log(res);
    })
  }
  getRequestCount(id) {
    this.appService.newRequestCount(id).then(res => {
      this.newRequestsCount = res.count;
      console.log(res);
    })
  }

  getNotifications(id) {
    this.appService.getNotifications(id).then(res => {
      this.notifications = res.notifications;
      console.log("NOTIFICATIONS", res);
      this.cleanNotifications();

    })
  }
  getRequests(id) {
    this.appService.getRequests(id).then(res => {
      this.requests = res.notifications;
      this.cleanRequests();
      console.log("requests", res);

    })
  }
  cleanRequests() {
    if (this.newRequestsCount > 0) {
      this.appService.cleanRequests(this.user.id_user).then(res => {
        console.log("requestsaa", res);
        this.newRequestsCount = 0;

      });
    }
  }
  cleanNotifications() {
    if (this.newNotificationCount > 0) {

      this.appService.cleanNotifications(this.user.id_user).then(res => {
        console.log("requestsaabb", res);
        this.newNotificationCount = 0;
      });

    }
  }

  goToMessages(id, name) {
    console.log("name", name)
    this.chatService.conversation = name;
    this.router.navigate(['./chat/msg', id], { relativeTo: this.route });
  }


  openLogin() {

    return this.modal.open(LoginComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));

  }

  openRegister() {

    return this.modal.open(RegisterComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
  logout() {
    this.auth.logout();
    this.user = null;
  }

  onSelect(profile) {
    this.router.navigate(['/profile/' + profile + '/activity']);
  }
  onSelectSettings(profile) {
    this.router.navigate(['/profile/' + profile + '/settings']);
  }

}
