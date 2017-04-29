import { ChatRoutingModule } from './chat.routing';
import { ChatComponent } from './chat.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';


import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ng2-bootstrap/accordion';


@NgModule({
  imports: [
    ChatRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  declarations: [ChatMessageComponent, ChatComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" }
  ],
})

export class ChatModule { }
