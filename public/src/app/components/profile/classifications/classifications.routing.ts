import { ObtainedComponent } from './obtained/obtained.component';
import { AttributedComponent } from './attributed/attributed.component';
import { ProfileModule } from '../profile.module';
import { ProfileComponent } from '../profile.component';
import { ClassificationsComponent } from './classifications.component';


import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


const routes: Routes = [

    {
        path: '',
        component: ClassificationsComponent,
        children: [
          {
            path: '',
            redirectTo: 'obtained'
          },
          {
            path: 'obtained',
            component: ObtainedComponent
          },
          {
            path: 'attributed',
            component: AttributedComponent
          },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassificationsRoutingModule { }
