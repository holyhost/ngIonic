import { Injectable } from '@angular/core';
import { BaseBean } from './data-type/base.type';

const appKey='ngIonic-theme-style'
const menuKey='ngIonic-menu-key'

@Injectable({
  providedIn: 'root'
})

/**
 * 控制主题的服务
 */
export class ConfigService {

  
  MenuList: BaseBean[] = [
    new BaseBean('pic',"图片",false,"#0080FF"),
    new BaseBean('video',"视频",false,"#9863e5"),
    new BaseBean('novel',"小说",false,"#ffd12a"),
    new BaseBean('news',"新闻",false,"#ff87b9"),
    new BaseBean('game',"游戏",false,"#53cb75"),
  ]

  constructor() {
    
    //从缓存中获取配置信息
    let tempMenu = window.localStorage.getItem(menuKey);
    if(tempMenu){
      this.MenuList = JSON.parse(tempMenu) as BaseBean[]
    }else{
      console.log("使用默认配置顺序！")
    }
   }

   update(from:number,to:number){
    //改变数组中元素位置
    if(to>=this.MenuList.length) to = this.MenuList.length -1
    let temp = this.MenuList[from]
    this.MenuList[from] = this.MenuList[to]
    this.MenuList[to] = temp
    window.localStorage.setItem(menuKey,JSON.stringify(this.MenuList));
   }
  
}
