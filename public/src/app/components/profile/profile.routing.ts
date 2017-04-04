import { ActionsComponent } from './actions/actions.component';
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
        component: ProfileComponent, children: [{
            path: 'actions',
            component: ActionsComponent
        }]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }