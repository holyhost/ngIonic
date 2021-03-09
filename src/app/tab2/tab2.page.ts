import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { ConfigService } from '../services/config.service';
import { BaseBean } from '../services/data-type/base.type';
import { ItemReorderEventDetail } from '@ionic/core';
import { IonReorderGroup } from '@ionic/angular';
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ws: WebSocket
  @ViewChild('reorder') reorder: IonReorderGroup;
  menu: BaseBean[] = []

  constructor(
    public cs: ConfigService
  ) {
    // this.connectServer()
    this.menu = cs.MenuList

    console.log(this.lengthOfLongestSubstring([-1,-2],[3]))
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


  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
    this.cs.update(ev.detail.from,ev.detail.to)
    
    
  }

  toggleReorderGroup() {
    this.reorder.disabled = !this.reorder.disabled;
  }


  lengthOfLongestSubstring(nums1: number[], nums2: number[]): number {
    nums1 = nums1.concat(nums2)
    nums1 = Array.from(new Set(nums1))
    nums1.sort()
    if(nums1){
        if(nums1.length%2 === 0){
            return(nums1[nums1.length/2-2]+nums1[nums1.length/2-1])/2
        }
        return nums1[(nums1.length-1)/2]
        
    }else{
        return 0
    }
}
}
