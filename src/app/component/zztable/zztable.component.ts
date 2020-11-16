import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { ZzTableBean } from './zztable.type';

@Component({
  selector: 'app-zztable',
  templateUrl: './zztable.component.html',
  styleUrls: ['./zztable.component.scss'],
})
/**
 * 表格控件：固定首行，首列
 * 输入：heard：表头
 * 输入：data: 数据，二维数组
 * 输出：点击的条目ZzTableBean
 */
export class ZzTableComponent implements OnInit, OnDestroy {

  @Input() head: string[] = [];//表头
  @Input() data: ZzTableBean[][] = [];//默认选中的下标
  @Output() OnItemClick = new EventEmitter<string|ZzTableBean>();//点击条目，发射出这个条目


  rowList = [];//测试数据
  colList = [];//测试数据

  constructor(
    public popoverController: PopoverController,
    public nav: NavController,
  ) {

    this.initTestData2()

  }

  initTestData2(){
        // let aa = [[1,2,3],[1,2,3],[1,2,3]]
        for (let i = 0; i < 10; i++) {
          this.head.push("头部"+i)
        }
        this.data = []
        for (let i = 0; i < 30; i++) {
          this.data.push([])
          for (let j = 0; j < 10; j++) {
            this.data[i][j] = new ZzTableBean(i+''+j,i+'---'+j)
            
          }
          
        }
        console.log(this.data)
  }

  //测试数据
  initTestData(){
    for (let index = 0; index < 10; index++) {
      this.rowList.push(index)
    }
    for (let index = 0; index < 30; index++) {
      this.colList.push(index)
    }
  }

  ngOnInit() {

    setTimeout(() => {
      console.log("延迟一秒打印")
    }, 1000);
  }

  



  ngOnDestroy(): void {
    
  }

}
