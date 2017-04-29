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
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
