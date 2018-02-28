import { Injectable } from '@angular/core';
import { ChatEngineCore } from 'chat-engine';

@Injectable()
export class ChatEngine {
  instance: any;
  create: any;
  plugin: any;
  constructor() {
    this.instance = ChatEngineCore.create(
      {
        publishKey: 'YOUR PUBLISH KEY HERE',
        subscribeKey: 'YOUR SUBSCRIBE KEY HERE'
      },
      {
        debug: true,
        globalChannel: 'chat-engine-angular2-simple'
      });

    this.create = ChatEngineCore.create.bind(this);
    this.plugin = ChatEngineCore.plugin;
  }
}
