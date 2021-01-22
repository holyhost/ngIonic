import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { DateChooseType, MenuTypeList } from './datechoose.type';
import { BaseBean } from 'src/app/services/data-type/base.type';
import { Utils } from 'src/app/services/utils';

@Component({
  selector: 'app-datechoose',
  templateUrl: './datechoose.component.html',
  styleUrls: ['./datechoose.component.scss'],
})
/**
 * 时间选择控件
 * 输入：时间的类型：昨日，今日，本月等
 * 输入：默认选中的 下标
 * 输出：number类型：开始时间，结束时间，选中类型
 */
export class DateChooseComponent implements OnInit, OnDestroy {

  @Input() typeList: string[] = [];//时间种类列表
  @Input() choosed: number = 1;//默认选中的下标

  // 时间变化触发的事件，选中某个时间后，会发出三个参数，依次是：开始时间，结束时间，类型
  @Output() onDateTypeChange = new EventEmitter<string[]>();

  //是否显示时间选择控件
  showDatePicker: boolean = false;

  currentPopover = null;
  timeoutList: any[] = [];

  //开始时间
  startTime: string;
  // 结束时间
  endTime: string;

  menu: BaseBean[] = [];
  constructor(
    public popoverController: PopoverController,
    public nav: NavController,
    public util: Utils,
  ) {
    this.startTime = this.util.dateFormat(new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd') + " 00:00:00";
    this.endTime = this.util.dateFormat(new Date())
  }


  ngOnInit() {
    this.initTabMenu();
    console.log("choose-date: init")
    // 初始化的时候发射一个选中的开始时间， 结束时间出去
    this.segmentChanged(this.typeList[this.choosed])
  }

  //根据输入类型，初始化tab数据
  initTabMenu() {
    if (this.typeList.length < 1) {
      //没有输入种类的话。就显示全部
      // this.menu = MenuTypeList;
      // this.typeList = this.menu.map(item => DateChooseType[item.key])
      this.typeList = [
        DateChooseType.yesterday,
        DateChooseType.today,
        DateChooseType.week,
        DateChooseType.gamonth,
        DateChooseType.deftime,
      ]
    } 
    //避免使用同一个对象出现的 地址引用问题。
    this.menu = this.typeList.map(key => JSON.parse(JSON.stringify(MenuTypeList.find(item => item.key === key))))
    for (let index = 0; index < this.menu.length; index++) {
      let element = this.menu[index];
      if(index === this.choosed){
        element.selected = true
      }else{
        element.selected = false;
      }
    }
  }




  ngOnDestroy(): void {
    this.timeoutList.forEach(item => window.clearTimeout(item));
  }

  /**
 * 点击tab触发事件
 */
  segmentChanged(key: string) {
    // let key = ev.detail.value;
    this.menu.forEach(item => {
      if (item.key === key) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    })
    //切换tab的时候，更新类型，时间
    console.log("tab", key)
    for (let index = 0; index < this.typeList.length; index++) {
      let item = this.typeList[index];
      if (item === key) {
        this.choosed = index;
        let result = (this.getDateByType(key))
        if(item !== DateChooseType.deftime){
          this.showDatePicker = false
          this.onDateTypeChange.emit(result)
        }else{
          this.showDatePicker = true;
        }
        return;
      }
    }

  }

  /**
   * 根据时间类型返回对应的时间
   * @param key 时间类型
   */
  getDateByType(key: string): string[] {
    let result: string[] = []
    let date1: Date;//开始时间
    let date2: Date;//结束时间

    if (key === DateChooseType.yesterday) {
      //昨天
      date2 = new Date(new Date(this.util.getDayFirstTime()).getTime() - 1000)
      date1 = new Date(this.util.getDayFirstTime(date2))//一天的开始时间)
    } else if (key === DateChooseType.today) {
      //今天
      date2 = new Date();//取当前时间
      date1 = new Date(this.util.getDayFirstTime(date2))//一天的开始时间)
    } else if (key === DateChooseType.week) {
      //本周
      date2 = new Date();//取当前时间
      date1 = new Date(this.util.getWeekFirstTime(date2))
    } else if (key === DateChooseType.month) {
      //本月
      date2 = new Date();//取当前时间
      date1 = new Date(this.util.getMonthFirst(date2))
    } else if (key === DateChooseType.gamonth) {
      //公安月 上月26零点，到 这个月25号24点
      let arr = this.util.getGaMonth();
      date2 = new Date(arr[1]);
      date1 = new Date(arr[0]);

    } else if (key === DateChooseType.year) {
      //本年
      date2 = new Date();//取当前时间
      date1 = new Date(date2.getFullYear() + "-01-01 00:00:00");
    } else if (key === DateChooseType.deftime) {
      //自定义
      date2 = new Date(this.endTime)
      date1 = new Date(this.startTime)
    }else if(key === DateChooseType.recent7){
      //最近7天
      date2 = new Date(this.util.getDayFirstTime(date2))//今天零点的时间
      date1 = new Date(date2.getTime()-7*24*60*60*1000)//往前推7天
    }else if(key === DateChooseType.recent30){
      //最近30天
      date2 = new Date(this.util.getDayFirstTime(date2))//今天零点的时间
      date1 = new Date(date2.getTime()-30*24*60*60*1000)//往前推30天
    }
    result[0] = this.util.dateFormat(date1)//开始时间
    result[1] = this.util.dateFormat(date2)//结束时间
    result[2] = this.choosed + ''//选中的下标
    return result;
  }

  /**
* 
* @param event 选择时间后，触发这个方法
*/
  dateChange(type: number, event) {
    console.log(event)
    let sourceTime: string = event.target.value;
    if (sourceTime) {
      let atime = sourceTime.replace("T", " ").slice(0, 19)
      console.log(atime)
      if (type === 0) {
        this.startTime = atime;
      } else {
        this.endTime = atime
      }
    }
  }

  /**
   * 按钮的点击事件
   * @param type 类型，0为取消，1为确定
   */
  onButtonClick(type:number = 0){
    this.showDatePicker = false
    if(type){
      //确定
      let result = this.getDateByType(DateChooseType.deftime)
      this.onDateTypeChange.emit(result)
    }
    //取消后。啥也不干。
  }
}
