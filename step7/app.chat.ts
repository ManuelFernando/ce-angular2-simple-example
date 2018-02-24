import {Component, Input, OnInit } from '@angular/core';
import {ChatEngine} from './chatEngine';
declare var require: any;
const typing = require('chat-engine-typing-indicator');

@Component({
  selector: 'app-chat',
  templateUrl: './templates/app.chat.html'
})
export class AppChatComponent implements OnInit {
  private ce: any;
  @Input() chat: any;
  @Input() index: number;
  users: any[] = [];

  constructor(private chatEngine: ChatEngine) {
    this.ce = chatEngine;
  }

  ngOnInit() {
  }

  getUsers(obj) {
    let users: any = [];

    if (obj) {
      Object.keys(obj).forEach((key) => {
        users.push(obj[key]);
      });
    }

    return users;
  }
}
