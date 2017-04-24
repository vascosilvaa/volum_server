import { FeedModule } from './feed.module';
import { FeedComponent } from './feed.component';

import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: FeedComponent,

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeedRoutingModule { }