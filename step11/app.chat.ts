import {Component, Input, OnInit } from '@angular/core';
import {ChatEngine} from './chatEngine';
declare var require: any;
const typing = require('chat-engine-typing-indicator');

@Component({
  selector: 'app-chat',
  templateUrl: './templates/app.chat.html'
})
export class AppChatComponent implements OnInit {
  ...

  constructor(private chatEngine: ChatEngine) {
    ...
  }

  ngOnInit() {
    this.chat.plugin(typing({ timeout: 5000 }));

    this.chat.on('message', (payload) => {
      ...
    });

    // when we get notified of a user typing
    this.chat.on('$typingIndicator.startTyping', (event) => {
      event.sender.isTyping = true;
    });

    // when we get notified a user stops typing
    this.chat.on('$typingIndicator.stopTyping', (event) => {
      event.sender.isTyping = false;
    });
  }

  ...
}
