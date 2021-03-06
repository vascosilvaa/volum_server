import { DOCUMENT } from '@angular/platform-browser';
import { HostListener } from "@angular/core";
import { SearchNavService } from './search-nav.service';

import { VolDetailsModalComponent } from './shared/vol-details-modal/vol-details-modal.component';
import { ModalEndComponent } from './shared/modal-end/modal-end.component';
import { ProfileService } from './shared/services/profile.service';
import { ChatService } from './shared/services/chat.service';
import { AppService } from './app.service';
import { SocketService } from './shared/socket.service';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './shared/Auth/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ViewContainerRef, OnInit, Inject } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SocketService, AppService, ChatService, ProfileService, SearchNavService]
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
  public messagesReady: boolean = false;
  public requestsReady: boolean = false;
  public notificationsReady: boolean = false;
  public sum: number = 5;

  //SEARCH
  model: any;
  searching = false;
  searchFailed = false;
  public showSearch: boolean;
  public feedActive: boolean;

  public login: any;

  constructor(overlay: Overlay, public route: ActivatedRoute, vcRef: ViewContainerRef, public modal: Modal,
    private router: Router, private auth: AuthenticationService,
    private socketService: SocketService, private appService: AppService, private chatService: ChatService,
    private profileService: ProfileService, public searchNavService: SearchNavService, @Inject(DOCUMENT) private document: any) {
    overlay.defaultViewContainer = vcRef;
    this.notification.src = "http://www.wavsource.com/snds_2017-05-21_1278357624936861/sfx/boing_x.wav";

  }


  @HostListener("window:scroll", [])


  onWindowScroll() {
    if (this.feedActive) {

      let number = this.document.body.scrollTop;
      if (number > 300) {
        this.showSearch = true;
      } else if (this.showSearch && number < 250) {
        this.showSearch = false;
      }

    }
  }


  ngOnInit() {

    if (this.auth.isAuthenticated()) {
      this.login = 1;
    } else {
      this.login = 0;
    }

    this.showSearch = false;

    this.router.events.subscribe((res) => {

      console.log("res", res)

      if (res['url'] == '/feed') {

        this.feedActive = true;
      } else {
        this.feedActive = false;
        this.showSearch = true;
      }

    });


    moment.locale('pt-pt');
    moment.updateLocale('pt', {
      relativeTime: {
        future: "Daqui a %s",
        past: "há % segundos",
        s: "Agora mesmo",
        m: "há 1 minuto",
        mm: "há %d minutos",
        h: "há 1 hora",
        hh: "há %d horas",
        d: "há 1 dia",
        dd: "há %d dias",
        M: "há 1 mês",
        MM: "há %d meses",
        y: "há 1 ano",
        yy: "há %d anos"
      }
    });
    this.getUser();

  }

  formatter = (x: {
    name: string
    registration: {
      name: string
    }
  }) => x.name || x.registration.name;


  getUser() {
    if (this.auth.isAuthenticated()) {
      this.auth.userPromise.then(res => {
        this.user = res.user;
        this.socketService.onNotification().subscribe(res => {
          this.newNotificationCount++;
          console.log("NEW NOTIFICATION", res);

        });

        this.socketService.onRequest().subscribe(res => {
          this.newRequestsCount++;
          console.log("NEW REQUEST", res);


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
      this.getUsersAndLastMessage();
    });
  }

  getUsersAndLastMessage() {
    if (this.conversations.length == 0) {
      this.messagesReady = true;
    }
    for (let i = 0; i < this.conversations.length; i++) {
      this.profileService.getUserSimple(this.conversations[i].id_user).then(res => {
        this.conversations[i].photo_url = res.user.photo;
        this.conversations[i].name = res.user.name;
        console.log(res);
      });
      this.chatService.getLastMessage(this.conversations[i].id_conversation).then(res => {
        this.conversations[i].message = res.messages[0].message;
        this.conversations[i].date = res.messages[0].date;
        this.messagesReady = true;
        console.log(res);
      });

    }
  }
  getLastMessage(id) {

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


  getNotifications(startAt, amount, replace) {
    this.cleanNotifications();
    this.notificationsReady = false;

    this.appService.getNotifications(startAt, amount).then(res => {
      if (replace) {

        this.notifications = res.notifications;
        this.notificationsReady = true;
      } else {
        this.notifications = this.notifications.concat(res.notifications);
        this.notificationsReady = true;

        console.log("NOTIFICATIONS", res);

      }

    })
  }
  getRequests(id) {
    this.appService.getRequests(id).then(res => {
      this.requests = res.notifications;
      this.requestsReady = true;
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

  goToMessagesAll() {
    this.router.navigate(['./chat']);
  }


  openLogin() {

    return this.modal.open(LoginComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));

  }

  openRegister() {
    return this.modal.open(RegisterComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

  openVolDetails(type, id_vol) {
    if (type == 6) {
      return this.modal.open(ModalEndComponent, overlayConfigFactory({ id_vol: id_vol, type: 3 }, BSModalContext));
    } else {
      return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: id_vol, indexVol: null }, BSModalContext));
    }
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/feed');
    this.user = null;
  }

  onSelect(profile) {
    this.router.navigate(['/profile/' + profile + '/activity']);
  }
  onSelectSettings(profile) {
    this.router.navigate(['/profile/' + profile + '/settings']);
  }

  onNotificationsScroll() {
    console.log("scroll");
    this.sum = this.sum + 6;
    this.getNotifications(this.sum, 5, false);
  }

  // SEARCH
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.searchNavService.search(term)
          .do(() => { this.searchFailed = false })
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  navigate(id, type) {
    if (this.login == 1) {

      if (type == 1 || type == 2) {
        this.model = "";
        this.router.navigate(['profile/' + id + '/about']);
      } else if (type == 0) {
        this.model = "";
        this.router.navigate(['action/' + id])
      }

    } else {
      this.openLogin();
    }
  }

}
