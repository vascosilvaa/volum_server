import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ActionsComponent } from './actions/actions.component';
import { FollowingComponent } from './following/following.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile.component';

import { routing } from './profile.routing';


@NgModule({
  imports: [
    routing  ],
  declarations:
    [ProfileComponent]

})

export class ProfileModule {}
