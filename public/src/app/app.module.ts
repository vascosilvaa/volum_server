import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FeedModule } from './components/feed/feed.module';
import { ProfileService } from './shared/services/profile.service';
import { volsService } from './shared/services/vols.service';
import { ModalEndComponent } from './shared/modal-end/modal-end.component';
import { ModalViewAllComponent } from './shared/modal-view-all/modal-view-all.component';

import { SharedModule } from './shared/shared.module';
import { MapModule } from './components/map/map.module';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClient } from './shared/http-client';
import { AuthenticationService } from './shared/Auth/authentication.service';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { VolDetailsModalComponent } from './shared/vol-details-modal/vol-details-modal.component';
import { MapComponent } from './components/map/map.component';
import { SearchComponent } from './components/search/search.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ChatComponent } from './components/chat/chat.component';
import { SocialRequestsComponent } from './components/social-requests/social-requests.component';
import { ActionComponent } from './components/action/action.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    NotificationsComponent,
    SocialRequestsComponent,
    ActionComponent,
    ErrorComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    MaterialModule,
    FeedModule,
    FormsModule,
    HttpModule,
    MapModule,
    MomentModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BootstrapModalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSjBjb_vmdR0zlScrJM12DQRjc58HMQ7A'
    }),
  ],
  entryComponents: [LoginComponent, RegisterComponent, ModalViewAllComponent, ModalEndComponent, VolDetailsModalComponent, ModalViewAllComponent],
  providers: [AuthenticationService, HttpClient, volsService, ProfileService, { provide: LOCALE_ID, useValue: "pt-PT" }],
  bootstrap: [AppComponent],
})
export class AppModule { }
