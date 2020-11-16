import { Component } from '@angular/core';
import { Production } from '../services/data-type/config.type';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  //帮助文档
  production = Production

  constructor() {}

  unread(item){
    console.log(item)
  }

}
