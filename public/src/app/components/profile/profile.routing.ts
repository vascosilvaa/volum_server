import { DetailsComponent } from './details/details.component';
import { ActionsComponent } from './actions/actions.component';
import { ActivityComponent } from './activity/activity.component';
import { AboutComponent } from './about/about.component';
import { FollowingComponent } from './following/following.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileModule } from './profile.module';
import { ProfileComponent } from './profile.component';

import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


const routes: Routes = [

    {
        path: '',
        component: ProfileComponent,
        children: [
          {
            path: 'details',
            component: DetailsComponent
          },
          {
            path: 'actions',
            component: ActionsComponent
          },
          {
            path: 'activity',
            component: ActivityComponent
          },
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'following',
            loadChildren: 'app/components/profile/following/following.module#FollowingModule'
          },
          {
            path: 'settings',
            loadChildren: 'app/components/profile/settings/settings.module#SettingsModule'
          },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
