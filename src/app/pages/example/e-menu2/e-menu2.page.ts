import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItemBean } from 'src/app/component/menu2/menu.type';
import { HttpService } from 'src/app/services/http.service';
import { IonService } from 'src/app/services/ion.servic';


/**
 * 文件选择案例界面
 */

@Component({
  selector: 'app-e-menu2',
  templateUrl: 'e-menu2.page.html',
  styleUrls: ['e-menu2.page.scss']
})
export class EMenu2Page implements OnInit{
  
 
  listData: MenuItemBean[] = []//社区列表

  
  constructor(

  ) {
    this.initListData();
  }

  //初始化基础数据
  initListData(){
    // 清空列表
    this.listData = [];
    for(let i=1;i<10;i++){
      //创建一个父级
      let parent = new MenuItemBean(i+"",i+"号大树")
      parent.childs = []
      for(let child = 1;child<20;child++){
        let bean = new MenuItemBean(i+"--"+child,i+"号大树的儿子"+child)
        parent.childs.push(bean)
      }
      this.listData.push(parent)
    }

  }

  ngOnInit(): void {


  }

  initBaseData(){
    
  }

}
