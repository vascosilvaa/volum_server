import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { SettingsRoutingModule } from './settings.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile.component';
import { SettingsComponent } from './settings.component';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    SettingsRoutingModule,
    AccordionModule.forRoot(),
  ],
  declarations: [SettingsComponent, PersonalSettingsComponent, AboutMeComponent, EducationComponent, ChangePassComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" },
  ]
})

export class SettingsModule { }
