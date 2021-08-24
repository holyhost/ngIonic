import { Component, OnInit, ViewChild } from '@angular/core';
import { ZzTableBean } from 'src/app/component/zztable/zztable.type';

/**
 * 标题示例界面
 */

@Component({
  selector: 'app-e-table',
  templateUrl: 'e-table.page.html',
  styleUrls: ['e-table.page.scss']
})
export class ETablePage implements OnInit {


  head: ZzTableBean[] = []
  data: ZzTableBean[][] = []


  constructor(

  ) {
    this.initTestData2(2)
  }

  ngOnInit(): void {


  }

  initTestData2(colCount = 4) {
    // let aa = [[1,2,3],[1,2,3],[1,2,3]]
    this.head = []
    for (let i = 0; i < colCount; i++) {
      if (i % 3 === 0) {
        this.head.push(new ZzTableBean(i + '', "头部" + i, false, 'mix'))

      } else {
        this.head.push(new ZzTableBean(i + '', "头部" + i, false))

      }
    }
    
    this.data = []
    for (let i = 0; i < 30; i++) {
      this.data.push([])
      for (let j = 0; j < colCount; j++) {
        if (j % 2 === 0) {
          this.data[i][j] = new ZzTableBean(i + '' + j, (i - j) + "", false, 'mix', 'red')
        } else {
          this.data[i][j] = new ZzTableBean(i + '' + j, i + '-------' + j, false, 'text', 'blue')
        }


      }

    }
    console.log(this.data)
  }


  changeNumber() {

    let count = Math.floor(Math.random()*10)
    console.log("随机数："+count)
    this.initTestData2(count)

  }
}
