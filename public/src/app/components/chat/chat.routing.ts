import { ChatNewComponent } from './chat-new/chat-new.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatComponent } from './chat.component';


import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


const routes: Routes = [

    {
        path: '',
        component: ChatComponent,
        children: [
          {
            path: 'msg',
            component: ChatMessageComponent
          },
          {
              path: 'new',
              component: ChatNewComponent
          }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
