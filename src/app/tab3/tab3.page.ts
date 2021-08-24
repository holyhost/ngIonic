import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { from } from 'rxjs';
import { BaseBean } from '../services/data-type/base.type';
import { ThemeService } from '../services/theme.service';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  @ViewChild('reorder') reorder: IonReorderGroup;
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
    // this.test();
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


  toggleReorder() {
    // this.reorder.disabled = !this.reorder.disabled;
    // this.reorder.addEventListener('ionItemReorder', ({detail}) => {
    //   detail.complete(true);
    // });
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorder.disabled = !this.reorder.disabled;
  }

  test(){

    console.log('结果',this.longestPalindrome('a'))
    console.log('结果',this.longestPalindrome('abc'))
    console.log('结果',this.longestPalindrome('aa'))
    console.log('结果',this.longestPalindrome('aaaa'))
    console.log('结果',this.longestPalindrome('abba'))
    console.log('结果',this.longestPalindrome('aba'))

  }
  longestPalindrome(s: string): string {

    let centerIndex = 1;//回文数中心下标
    let maxLength = 0;//最大长度
    let arr = '#'
    //间隔增加*，不管是奇数还是偶数。最后都会变成奇数，方便计算
    for(let i=0;i<s.length;i++){
        arr = arr + s[i]+'#'
    }
    console.log(arr)
    for (let i = 1; i < arr.length; i++) {
        let dis = 1;
        
        while(i-dis>-1 && i+dis<arr.length&& arr[i-dis] === arr[i+dis]){

            dis++
        }
        
        if(maxLength<dis){
            maxLength = dis
            centerIndex = i
        }
        
    }
    maxLength -=1
    console.log('centerIndex',centerIndex)
    console.log('maxLength',maxLength)
    s = arr.slice(centerIndex-maxLength,centerIndex+maxLength+1)
    console.log(s)
    s = s.replace(/#/g,'')
    console.log(s)
    for(let i = centerIndex-maxLength;i<centerIndex+maxLength+1;i++)
    return s

}
}
