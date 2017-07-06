import { FinishedComponent } from './finished/finished.component';
import { WaitingComponent } from './waiting/waiting.component';
import { InvitesComponent } from './invites/invites.component';
import { MyActionsComponent } from './my-actions/my-actions.component';
import { MineComponent } from './mine/mine.component';
import { ActionsComponent } from './actions.component';
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
        component: ActionsComponent,
        children: [
          {
            path: '',
            redirectTo: 'my-actions'
          },
          {
            path: 'my-actions',
            component: MyActionsComponent
          },
          {
            path: 'mine',
            component: MineComponent
          },
          {
            path: 'invites',
            component: InvitesComponent
          },
          {
            path: 'waiting',
            component: WaitingComponent
          },
          {
            path: 'finished',
            component: FinishedComponent
          },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActionsRoutingModule { }
