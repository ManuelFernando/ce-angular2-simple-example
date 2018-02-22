import { Component, OnInit } from '@angular/core';
import { ChatEngine } from './chatengine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private ce: any;

  constructor(private chatEngine: ChatEngine) {
    this.ce = chatEngine;
  }

  ngOnInit() {
    this.ce.instance.connect(new Date().getTime(), {}, 'auth-key');
    this.ce.instance.on('$.ready', (data) => {
      this.ce.me = data.me;
    });
  }
}
