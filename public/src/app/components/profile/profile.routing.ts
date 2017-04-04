import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ActionsComponent } from './actions/actions.component';
import { FollowingComponent } from './following/following.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile.component';

const Routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'activity', component: ActivityComponent },
    { path: 'about', component: AboutComponent },
    { path: 'actions', component: ActionsComponent },
    { path: 'following', component: FollowingComponent },
    { path: 'settings', component: SettingsComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(Routes);
