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
    if (this.mysearch.length >= 2) {
      let found = this.ce.chat.onlineUserSearch.search(this.mysearch);

      // hide every user
      for(let uuid in this.ce.chat.users) {
        this.ce.chat.users[uuid].hideWhileSearch = true;
      }

      // show all found users
      for(let i in found) {
        this.ce.chat.users[found[i].uuid].hideWhileSearch = false;
      }
    } else {
      for(let uuid in this.ce.chat.users) {
        this.ce.chat.users[uuid].hideWhileSearch = false;
      }
    }
  }
}
