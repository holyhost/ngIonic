import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


/**
 * 页面不停刷新动画界面，用于数据请求时的展示
 */
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {

  @Input() count:number = 8;//条目的个数
  @Input() show:boolean = true;//是否展示

  data: number[] = []
  
  constructor(
  ) { 
    this.data = []
    for(let i=0;i<this.count;i++){
      this.data.push(Math.random())
    }
  }

  ngOnInit() {

    
  }

}
