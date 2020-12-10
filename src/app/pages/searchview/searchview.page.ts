import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Story } from 'src/app/services/data-type/story.zhihu.type';
import { HttpService } from 'src/app/services/http.service';
import { IonService } from 'src/app/services/ion.servic';
import { Utils } from 'src/app/services/utils';

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

  @ViewChild('IonInfiniteScroll') infiniteScroll: IonInfiniteScroll;

  num: number = 30;
  keyword = '';

  constructor(
    public http: HttpService,
    public ion: IonService,
    public util: Utils,
    public router: Router
  ) {
  }

  ngOnInit(): void {


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
}
