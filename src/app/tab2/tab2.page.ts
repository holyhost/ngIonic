import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ws: WebSocket

  constructor() {
    this.connectServer()
  }

  connectServer(){
    if(this.ws){
      this.ws.close()
    }

    this.ws = new WebSocket('wss://localhost:9090')
    let self = this;
    this.ws.onopen = function(event){
      console.log(event)
      self.ws.send('i am client')
    }
    this.ws.onmessage = function(event){
      self.ws.send('ngIonic 发送来了一条消息啦！qaq')
    }
    this.ws.onerror = function(event){
      console.log('ws ---  onerror')
    }
    this.ws.onclose = function(event){
      console.log('ws ---  onclose')
    }
  }

}
