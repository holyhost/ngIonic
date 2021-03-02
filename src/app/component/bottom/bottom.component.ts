import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


/**
 * 底部控件，用于列表滑到底部，显示“我是有底线的”
 */
@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class BottomComponent implements OnInit {

  @Input() text:string='已经到底了！'
  @Input() more:string[] =[];

  constructor(
  ) { 

    this.initTestData()
  }

  ngOnInit() {

  }

  initTestData(){
    this.more = [
      '说明：',
      '1. 本页数据从配置文件config.type.ts中读取；',
      '2. 这是第二条说明；',
      '3. 这是第三条说明；',
    ]
  }

}
