import { ChatModule } from './components/chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { MapModule } from './components/map/map.module';
import { CardComponent } from './shared/card/card.component';
import { FilterComponent } from './shared/filter/filter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClient } from './shared/http-client';
import { AuthenticationService } from './shared/Auth/authentication.service';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { LayoutComponent } from './components/layout/layout.component';
import { VolDetailsModalComponent } from './shared/vol-details-modal/vol-details-modal.component';
import { MapComponent } from './components/map/map.component';
import { SearchComponent } from './components/search/search.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ActionComponent } from './components/action/action.component';
import { ChatComponent } from './components/chat/chat.component';
import { SocialRequestsComponent } from './components/social-requests/social-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    FilterComponent,
    SearchComponent,
    NotificationsComponent,
    ActionComponent,
    SocialRequestsComponent,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    MapModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BootstrapModalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
    }),
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
