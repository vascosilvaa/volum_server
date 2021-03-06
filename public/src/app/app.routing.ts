import { ErrorComponent } from './components/error/error.component';
import { ActionComponent } from './components/action/action.component';
import { TermsComponent } from './components/terms/terms.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SocialRequestsComponent } from './components/social-requests/social-requests.component';
import { ActionsComponent } from './components/profile/actions/actions.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchComponent } from './components/search/search.component';
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './shared/Auth/authentication.guard';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';

import { FeedComponent } from './components/feed/feed.component';

const appRoutes: Routes = [

  { path: 'feed', redirectTo: 'feed', pathMatch: 'full' },

  { path: '*', redirectTo: 'feed', pathMatch: 'full' },
  { path: '', redirectTo: 'feed', pathMatch: 'full' },

  {
    path: '',
    children: [
      {
        path: 'chat',
        canActivate: [AuthenticationGuard],
        loadChildren: '../app/components/chat/chat.module#ChatModule'
      },
      {
        path: 'profile/:id',
        loadChildren: '../app/components/profile/profile.module#ProfileModule'
      },
      {
        path: 'action/:id',
        canActivate: [AuthenticationGuard],
        component: ActionComponent
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: 'map',
        canActivate: [AuthenticationGuard],
        loadChildren: '../app/components/map/map.module#MapModule'
      },
      {
        path: 'search',
        canActivate: [AuthenticationGuard],
        component: SearchComponent,
      },
      {
        path: 'notifications',
        canActivate: [AuthenticationGuard],
        component: NotificationsComponent
      },
      {
        path: 'requests',
        component: SocialRequestsComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
    ]
  },
  // { path: '**', component: ErrorComponent },
  // { path: '404', component: ErrorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}