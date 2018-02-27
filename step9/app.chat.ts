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
    ...
  }

  getUsers(obj) {
    ...
  }

  leave() {
    this.chat.leave();
    this.ce.chats.splice(this.index, 1);

    return false;
  }

  send() {
    ...
  }
}
