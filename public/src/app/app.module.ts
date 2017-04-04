import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedComponent } from './components/feed/feed.component';
import { CardComponent } from './shared/card/card.component';
import { FilterComponent } from './shared/filter/filter.component';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { FooterComponent } from './shared/footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ActivityComponent } from './components/profile/activity/activity.component';
import { AboutComponent } from './components/profile/about/about.component';
import { ActionsComponent } from './components/profile/actions/actions.component';
import { FollowingComponent } from './components/profile/following/following.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { DetailsComponent } from './components/profile/details/details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { routing } from './app.routing';


import { AccordionModule } from 'ng2-bootstrap';
import { PersonalSettingsComponent } from './components/profile/settings/personal-settings/personal-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    FeedComponent,
    CardComponent,
    FilterComponent, 
    FollowingComponent,
    SettingsComponent,
    DetailsComponent,
    PersonalSettingsComponent,
  ],
  imports: [
    routing,
    CarouselModule.forRoot(),
    NgbModule.forRoot(),
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
    }),
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
