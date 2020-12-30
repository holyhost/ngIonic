import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Story } from 'src/app/services/data-type/story.zhihu.type';
import { HttpService } from 'src/app/services/http.service';
import { IonService } from 'src/app/services/ion.servic';
import { Utils } from 'src/app/services/utils';
import { SearchTypeBean } from './search.type';

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

  initTestData(){

    this.sortList = [
      new SearchTypeBean("1","优质",false,101),
      new SearchTypeBean("2","分类",false,102),
      new SearchTypeBean("3","销量",false,104),
    ]

    this.sortMoreList = [
      new SearchTypeBean("1","优质",false,100),
      new SearchTypeBean("2","分类",false,100),
      new SearchTypeBean("3","销量",false,100),
      new SearchTypeBean("4","销量",false,100),
      new SearchTypeBean("5","销量",false,100),
      new SearchTypeBean("6","销量",false,100),
      new SearchTypeBean("7","销量",false,100),
      new SearchTypeBean("13","销量",false,100),
      new SearchTypeBean("12","销量",false,100),
      new SearchTypeBean("8","销量",false,100),
      new SearchTypeBean("9","销量",false,100),
    ]
  }

  onSearchClick(event){
    console.log(event)
    console.log("关键词："+this.keyword)
  }

  //开始时间
  startTime:number = new Date().getTime();
  debounceCheck(duration: number = 300){

    let tempTime = new Date().getTime();
    
  }

  //排序的数据条目点击了
  onSearchTypeClick(item: SearchTypeBean){
    this.sortList.forEach(i=>item.key === i.key&&(item.selected = !item.selected))
    console.log(item.value)
  }

  onSortMoreItemClick(item: SearchTypeBean){
    this.sortMoreList.forEach(i=>item.key === i.key&&(item.selected = !item.selected))
    console.log(item.value)
  }

  //点击确认按钮
  onOkButtonClick(){

  }
  // 点击取消按钮
  onCancelButtonClick(){

  }
}
