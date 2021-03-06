import {Component, Input, OnInit } from '@angular/core';
import {ChatEngine} from './chatEngine';

@Component({
  selector: 'app-chat',
  templateUrl: './templates/app.chat.html'
})
export class AppChatComponent implements OnInit {
  private ce: any;
  @Input() chat: any;
  @Input() index: number;
  users: any[] = [];
  messages: any[] = [];
  message: string;

  constructor(private chatEngine: ChatEngine) {
    this.ce = chatEngine;
  }

  ngOnInit() {
    this.chat.on('message', (payload) => {
      // if the last message was sent from the same user
      payload.sameUser = this.messages.length > 0 && payload.sender.uuid === this.messages[this.messages.length - 1].sender.uuid;

      // if this message was sent by this client
      payload.isSelf = payload.sender.name === 'Me';

      // add the message to the array
      this.messages.push(payload);
    });
  }

  getUsers(obj) {
    ...
  }

  send() {
    this.chat.emit('message', { text: this.message });
    this.message = '';
  }
}
