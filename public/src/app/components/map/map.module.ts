import { Router, Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { VolDetailsModalComponent } from './../../shared/vol-details-modal/vol-details-modal.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SharedModule } from './../../shared/shared.module';
import { CardComponent } from './../../shared/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

    {
        path: '',
        component: MapComponent
    }
];

@NgModule({
    imports: [
        MaterialModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
        })],

    declarations: [MapComponent],
})

export class MapModule { }

