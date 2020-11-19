import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { BaseBean } from 'src/app/services/data-type/base.type';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit,OnDestroy {

  @Input() title:string="标题";//标题
  @Input() back:boolean=true;//是否可以返回
  @Input() tab:boolean=false;//是否显示导航
  @Input() navigate:boolean=true;//是否记录导航
  @Input() right:boolean=true;//是否显示最右边pop
  @Input() more:boolean=false;//最右边第二个按钮
  @Input() operations:BaseBean[] = []// 记录常用操作
  @Input() moreIcon:string="add-outline";//m最右边第二个按钮。默认是加号
  @Output() onMore = new EventEmitter<string>();//点击加号，触发事件
  @Output() OnTitleClick = new EventEmitter<boolean>();//点击加号，触发事件
  @Output() OnNavClick = new EventEmitter<BaseBean>();//点击导航，常用操作
  titleClickCount = 0;
  currentPopover  = null;
  timeoutList: any[] = [];

  constructor(
    public popoverController: PopoverController,
    public nav: NavController
  ) { 

  }

  ngOnInit() {

  }


  dismissPopover() {
    if (this.currentPopover) {
      this.currentPopover.dismiss().then(() => { this.currentPopover = null; });
    }
  }
  async showOption(ev){

    // let popover = await this.popoverController.create({
    //   component: TitlepopComponent,
    //   event: ev,
    //   translucent: true
    // });
    // this.currentPopover = popover;
    // return popover.present();
    
  }


  exitApp(){
    console.log("tile-exitapp");
    this.dismissPopover();

  }
  goback(){
    if(this.back){
      this.nav.back();
    }
  }

  onTitleClick(){
    this.titleClickCount++;
    let i = setTimeout(() => {
      
      if(this.titleClickCount>5){
        this.OnTitleClick.emit(true)
      }else{
        this.OnTitleClick.emit(false)
        this.titleClickCount = 0;
      }
    }, 1200);
    this.timeoutList.push(Number.parseInt(i+""));
    console.log("timeout:"+i)
    // window.clearTimeout(i);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.timeoutList.forEach(item => window.clearTimeout(item));
  }

  onNavClick(type:string){

    
  }

  //添加到常用操作中去
  addOperations(bean: BaseBean){
    
    this.onOperationsItemClick(bean)

  }
  //清空常用操作中去
  clearOperations(){
    this.operations = []
  }

  //点击了某个常用操作指令
  onOperationsItemClick(bean: BaseBean){
    //先判断这个指令有没有
    let result = this.operations.findIndex((item=>item.key === bean.key))
    if(result>-1){
      //存在。把它放到首位
      if(result!=0){
        // 交换位置
        let temp = this.operations[0]
        this.operations[0] = this.operations[result]
        this.operations[result] = temp
        //发射出去
        this.OnNavClick.emit(bean)
      }
    }else{
      // 不存在，添加到行首
      this.operations.unshift(bean)
    }
  }


}
