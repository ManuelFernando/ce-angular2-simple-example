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
  mysearch: string = '';

  constructor(private chatEngine: ChatEngine) {
    this.ce = chatEngine;
  }

  ngOnInit() {
    ...
  }

  getUsers(obj) {
    ...
  }

  invite(user) {
    this.chat.invite(user);
    this.users = [];

    return false;
  }

  leave() {
    ...
  }

  send() {
    ...
  }

  search() {
    if (this.mysearch.length >= 2) {
      this.users = this.ce.chat.onlineUserSearch.search(this.mysearch);
    } else {
      this.users = [];
    }
  }
}
