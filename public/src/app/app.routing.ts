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
  { path: '*', redirectTo: 'feed', pathMatch: 'full' },
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: '',
   // canActivateChild: [AuthenticationGuard],
    children: [
      {
        path: 'profile/:id',
        loadChildren: '../app/components/profile/profile.module#ProfileModule'
      },
      {
        path: 'feed',
        loadChildren: '../app/components/feed/feed.module#FeedModule'
      },
      {
        path: 'map',
        component: MapComponent
      }
]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}