import { Component } from '@angular/core';
import { BaseBean } from '../services/data-type/base.type';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  themes: BaseBean[]= []

  constructor(private theme: ThemeService) {
    let tempData =  [
      new BaseBean('dark','橙色',true,'warning'),
      new BaseBean('contrast','红色',false,'danger'),
      new BaseBean('light','绿色',false,'success'),
    ]
    if(this.theme.curTheme){
      
      tempData.forEach(item=>{
        if(item.key === this.theme.curTheme){
          item.selected = true
          console.log("默认的颜色是："+this.theme.curTheme+"--"+item.value)
        }else{
          item.selected = false
        }
      })
    }
    this.themes = tempData
    console.log(this.themes)
  }

  getCurTheme(){
    let theme = '';
    this.themes.forEach(item=>item.selected&&(theme = item.key))
    this.theme.changeTheme(theme)
  }

  onThemeChange(event){

    let akey = event.detail.value
    this.themes.forEach(item=>{
      if(item.key === akey){
        item.selected = true
      }else{
        item.selected = false
      }
    })
  }


}
