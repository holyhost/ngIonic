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

  @Input() head: ZzTableBean[] = [];//表头
  @Input() data: ZzTableBean[][] = [];//默认选中的下标
  @Output() OnItemClick = new EventEmitter<string|ZzTableBean>();//点击条目，发射出这个条目
  @Output() OnHeaderClick = new EventEmitter<number>();//点击头部，发射出这个条目


  // rowList = [];//测试数据
  // colList = [];//测试数据
  wdList:number[] = [];//每列宽度数组。

  constructor(
    public popoverController: PopoverController,
    public nav: NavController,
  ) {

    // this.initTestData2()
    this.initWdthData()

  }

  initWdthData(){
    this.wdList = []
    if(this.head.length<1) return;
    //根据当前数据，判断列的最大宽度
    for(let j=0;j<this.head.length;j++){
      // j表示列
      let tempWidth = 120
      let maxLength = 1;//值得最大长度
      for(let i=0;i<this.data.length;i++){
        // i 表示行
        // 拿到每列的条目
        let colItem = this.data[i][j]
        if(colItem.value.toString().length>maxLength) {
          maxLength = colItem.value.toString().length
        }
      }
      // 根据值得最大长度，动态改变列的宽度
      if(maxLength<10){
        tempWidth = maxLength*10+20
      }
      this.wdList[j] = tempWidth
    }
    //为了防止总体数量过少，没有全部撑开屏幕宽度展示，给最小的那几个增加宽度
    let totalW = 0
    this.wdList.forEach(wd=>totalW+=wd)
    let bodywd = document.body.clientWidth-20;
    console.log("body="+bodywd)
    if(totalW<bodywd){
      for (let i = 0; i < this.wdList.length; i++) {
        let nn = this.wdList[i];
        nn = nn+(bodywd-totalW)/this.wdList.length
        this.wdList[i] = nn
      }
    }
  }


  initTestData2(){
        // let aa = [[1,2,3],[1,2,3],[1,2,3]]
        let colCount = 2;
        for (let i = 0; i < colCount; i++) {
          if(i%3===0){
            this.head.push(new ZzTableBean(i+'',"头部"+i,false,'mix'))

          }else{
          this.head.push(new ZzTableBean(i+'',"头部"+i,false))

          }
        }
        this.data = []
        for (let i = 0; i < 30; i++) {
          this.data.push([])
          for (let j = 0; j < colCount; j++) {
            if(j%2 === 0){
              this.data[i][j] = new ZzTableBean(i+''+j,(i-j)+"",false,'mix','red')
            }else{
              this.data[i][j] = new ZzTableBean(i+''+j,i+'-------'+j,false,'text','blue')
            }
            
            
          }
          
        }
        console.log(this.data)
  }

  // //测试数据
  // initTestData(){
  //   for (let index = 0; index < 10; index++) {
  //     this.rowList.push(index)
  //   }
  //   for (let index = 0; index < 30; index++) {
  //     this.colList.push(index)
  //   }
  // }

  ngOnInit() {

    setTimeout(() => {
      console.log("延迟一秒打印")
    }, 1000);
  }

  



  ngOnDestroy(): void {
    
  }

  onHeaderClick(bean: ZzTableBean,col:number){

    this.OnHeaderClick.emit(col)
    //如果是需要排序的
    if(bean.type === 'mix'){
      //改变颜色
      this.head.forEach(item=>{
        item.color = '#a6a6a6'
      })
      bean.color = '#6CA1FF'
      //调整顺序
      bean.selected = !bean.selected
      this.sortData(col,bean.selected?1:-1)
    }
  }

  //对表格数据重新排序，
  sortData(col:number,porn:number = 1){

    console.log("重新排序：---")
    // console.log(this.data)
    this.data.sort((a,b)=>{
        let aa = a[col].value as number
        let bb = b[col].value as number
        console.log(aa,bb)
        return (aa-bb)*porn
    })
  } 


}
