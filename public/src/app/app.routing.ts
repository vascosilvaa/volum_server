import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedComponent } from './components/feed/feed.component';
import { LayoutComponent } from './components/layout/layout.component';

const appRoutes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'profile', loadChildren: './components/profile/profile.module#ProfileModule' },
    { path: 'feed', component: FeedComponent },

  ] }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
