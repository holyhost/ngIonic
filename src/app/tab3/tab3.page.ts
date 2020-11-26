import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    let aa = new Object()
    console.log(Object.keys(aa))
    let map = new Map<string,string>()
    for (let index = 0; index < 10; index++) {
      
      map.set(index +"a","colName"+index)
      aa['a'+index] = "colName"+index
    }
    
    console.log(map)
    console.log(aa)
    

  }



}
