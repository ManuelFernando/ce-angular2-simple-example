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
        publishKey: 'pub-c-d8599c43-cecf-42ba-a72f-aa3b24653c2b',
        subscribeKey: 'sub-c-6c6c021c-c4e2-11e7-9628-f616d8b03518'
      },
      {
        debug: true,
        globalChannel: 'chat-engine-angular2-simple'
      });

    this.create = ChatEngineCore.create.bind(this);
    this.plugin = ChatEngineCore.plugin;
  }
}
