import { Component } from '@angular/core';
import { ChatEngine } from './chatEngine';

@Component({
  selector: 'app-usersOnline',
  templateUrl: './templates/app.usersOnline.html'
})
export class AppUsersOnlineComponent {
  private ce: any;
  mysearch: string = '';

  constructor(private chatEngine: ChatEngine) {
    ...
  }

  getUsers(obj) {
    ...
  }

  search() {
    ...
  }

  newChat(user) {
    this.ce.newChat(user);

    return false;
  }
}
