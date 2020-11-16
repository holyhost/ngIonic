import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { MenuItemBean } from './menu.type';

/**
 * 二级菜单
 */

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
})
export class Menu2Component implements OnInit {

  @Input() badge:boolean = false;//角标，子选项中选择的个数
  @Input() data:MenuItemBean[] = [];//所有的数据
  @Input() multy:boolean = false;//是否多选  默认单选

  @Output() onMore = new EventEmitter<string>();//点击加号，触发事件

  lastSelectedItem: MenuItemBean = new MenuItemBean();//最后选中的那个条目
  constructor(
    public popoverController: PopoverController,
    public nav: NavController
  ) { 

  }

  ngOnInit() {

  }


  /**
   * 获取子类中选中的个数
   */
  getSelectItemsCount(item :MenuItemBean):number{
    let count = 0
    item.childs.forEach(item=>item.selected&&(count++))
    return count
  }

  //点击了父类
  select(idx:number){
    this.data[idx].selected = !this.data[idx].selected;
  }

  // 点击了子类
  selectItem(idx, index){
    if(this.multy){
      // 多选
      this.data[idx].childs[index].selected = !this.data[idx].childs[index].selected;
    }else{
      //单选
      this.lastSelectedItem.selected = false;//上次选中的置为false
      this.data[idx].childs[index].selected = true;//点击的 置为true
    }
    this.lastSelectedItem = this.data[idx].childs[index]

  }

  //取消全选
  deSelecteAll(){

    this.data.forEach(item=>{
      // item.selected = false;//父级会被折叠
      item.childs.forEach(child=>child.selected = false)
    })
  }

  /**
   * 所有选中的数据
   */
  getSelectedItems():MenuItemBean[]{
    let result:MenuItemBean[] = [];
    if(this.multy){
      //多选的话使用递归遍历，返回
      let tempArray:MenuItemBean[] = [];
      tempArray = tempArray.concat(this.data)
      while(tempArray.length){
        //获取首个条目
        let temp = tempArray.shift()
        if(temp.childs){
          tempArray = tempArray.concat(temp.childs)
        }
        console.log(temp)
        //选中了。筛选出来
        if(temp.selected&&temp.childs.length<1){
          result.push(temp)
        }
      }

    }else{
      // 单选的话返回最后点击选中的那个
      result = []//由于是单选，清空一下
      result.push(this.lastSelectedItem)
    }
    return result
 
      
  }
}
