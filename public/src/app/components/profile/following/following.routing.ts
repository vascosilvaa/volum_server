import { PeopleComponent } from './people/people.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { FollowingComponent } from './following.component';
import { ProfileModule } from '../profile.module';
import { ProfileComponent } from '../profile.component';

import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


const routes: Routes = [

    {
        path: '',
        component: FollowingComponent,
        children: [
          {
            path: '',
            redirectTo: 'institutional'
          },
          {
            path: 'institutional',
            component: InstitutionsComponent
          },
          {
            path: 'people',
            component: PeopleComponent
          },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FollowingRoutingModule { }
