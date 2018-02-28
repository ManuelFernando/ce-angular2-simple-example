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
