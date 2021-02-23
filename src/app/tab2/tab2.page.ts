import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ws: WebSocket

  constructor() {
    // this.connectServer()
    let aa = new Observable(aa=>{
      aa.next('start')
    }).pipe(
      map((res)=>  console.log("第1个map："+res)),
      map(res=>  {
        console.log("第2 个map="+res)
        return 'aa'
      }),
      map((res)=>  {
        console.log("第3 个map="+res)
        return "bb"
      })

    ).subscribe(res=>{
    //  aa.unsubscribe()
    console.log('最后的结果是：'+res)
    })
    console.log(aa)
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
