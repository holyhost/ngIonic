import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Production } from '../services/data-type/config.type';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  //帮助文档
  production = Production

  constructor(
    private route: ActivatedRoute
  ) {
    console.log("constructor")
    this.route.queryParams.subscribe(params => {
      console.log("aa",params)
      let param = params['data']
      console.log("bb",param)
    })
  }

  unread(item){
    console.log(item)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ngOnInit")
  }

}
