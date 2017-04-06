import { CardComponent } from './shared/card/card.component';
import { FilterComponent } from './shared/filter/filter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClient } from './shared/http-client';
import { AuthenticationService } from './shared/Auth/authentication.service';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { LayoutComponent } from './components/layout/layout.component';
import { VolDetailsModalComponent } from './shared/vol-details-modal/vol-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    FilterComponent,
    VolDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BootstrapModalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
