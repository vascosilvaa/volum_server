import { SettingsComponent } from './settings.component';
import { ProfileModule } from '../profile.module';
import { ProfileComponent } from '../profile.component';

import { ChangePassComponent } from './change-pass/change-pass.component';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';

import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


const routes: Routes = [

    {
        path: '',
        component: SettingsComponent,
        children: [
          {
            path: '',
            redirectTo: 'personal'
          },
          {
            path: 'personal',
            component: PersonalSettingsComponent
          },
          {
            path: 'about',
            component: AboutMeComponent
          },
          {
            path: 'education',
            component: EducationComponent
          },
          {
            path: 'change-pass',
            component: ChangePassComponent
          },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
