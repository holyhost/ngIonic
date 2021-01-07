import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Story } from 'src/app/services/data-type/story.zhihu.type';
import { HttpService } from 'src/app/services/http.service';
import { IonService } from 'src/app/services/ion.servic';
import { Utils } from 'src/app/services/utils';
import { SearchTypeBean, SortTypeEnum } from './search.type';

/**
 * 搜索界面
 */

@Component({
  selector: 'app-searchview',
  templateUrl: 'searchview.page.html',
  styleUrls: ['searchview.page.scss']
})
export class SearchViewPage implements OnInit {

  data: Story[] = []//知乎条目数据
  //时间 8位20201212
  date: string = '';

  sortList: SearchTypeBean[] = []//第一行
  sortMoreList: SearchTypeBean[] = []//第二行
  isShowButtons = false;//是否展示确认，取消按钮
  isShowOptions = false;//是否展示选择条目
  @ViewChild('IonInfiniteScroll') infiniteScroll: IonInfiniteScroll;

  num: number = 30;
  keyword = '';

  constructor(
    public http: HttpService,
    public ion: IonService,
    public util: Utils,
    public router: Router
  ) {
    this.initTestData();
  }

  ngOnInit(): void {



  }

  initTestData() {

    this.sortList = [
      new SearchTypeBean("1", "优质", false, 101),
      new SearchTypeBean("2", "分类", false, 102),
      new SearchTypeBean("3", "销量", false, 104),
    ]

    this.sortMoreList = [
      new SearchTypeBean("1", "优质", false, 100),
      new SearchTypeBean("2", "分类", false, 100),
      new SearchTypeBean("3", "销量", false, 100),
      new SearchTypeBean("4", "销量", false, 100),
      new SearchTypeBean("5", "销量", false, 100),
      new SearchTypeBean("6", "销量", false, 100),
      new SearchTypeBean("7", "销量", false, 100),
      new SearchTypeBean("13", "销量", false, 100),
      new SearchTypeBean("12", "销量", false, 100),
      new SearchTypeBean("8", "销量", false, 100),
      new SearchTypeBean("9", "销量", false, 100),
    ]
  }

  onSearchClick(event) {
    console.log(event)
    console.log("关键词：" + this.keyword)
  }

  //开始时间
  startTime: number = new Date().getTime();
  debounceCheck(duration: number = 300) {

    let tempTime = new Date().getTime();

  }

  //排序的数据条目点击了
  onSearchTypeClick(item: SearchTypeBean) {
    if (item.type === SortTypeEnum.Sortu || item.type === SortTypeEnum.Sortd) {
      item.selected = true;
      item.type = item.type * (-1)
    }else if(item.type === SortTypeEnum.Menu) {
      item.selected = !item.selected
      this.isShowOptions = true
      
    }else if(item.type === SortTypeEnum.Menux){
      item.selected = !item.selected
      if(item.selected){
        //显示按钮，展示数据
        this.isShowButtons = true;
      }else{
        this.isShowButtons = false;
      }
    } else{
      this.sortList.forEach(i=>item.key === i.key&&(item.selected = !item.selected))
    }
    
    // 降序升序事件，控制图标显示
    console.log(item.value)
  }

  // 第二行筛选控件
  onSortMoreItemClick(item: SearchTypeBean) {
    if (item.type === SortTypeEnum.Label) {
      item.selected = !item.selected
      this.filterLabel(item)
    }
    console.log(item.value)
  }

  //点击确认按钮
  onOkButtonClick() {
    //隐藏两个按钮
    this.isShowButtons = false
  }
  // 点击取消按钮
  onCancelButtonClick() {
    //隐藏两个按钮
    this.isShowButtons = false
  }

  //对于标签类排序进行筛选
  filterLabel(item: SearchTypeBean) {

    let selectedData = this.sortMoreList.filter(item => item.selected).map(item => item.key)
    // 一个标签都不选中
    if (selectedData.length < 1) {
      //展示的列表为  原来的全部数据
      console.log("一个标签都没选")
      return;
    }
    //判断类型，根据类型
    if (item.selected) {
      //选中事件，遍历添加添加


    } else {

      //取消选中，直接从当前列表剔除就行

    }
  }
}
