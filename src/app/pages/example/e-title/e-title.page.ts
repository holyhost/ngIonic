import { Component, OnInit, ViewChild } from '@angular/core';
import { IonService } from 'src/app/services/ion.servic';

/**
 * 标题示例界面
 */

@Component({
  selector: 'app-e-title',
  templateUrl: 'e-title.page.html',
  styleUrls: ['e-title.page.scss']
})
export class ETitlePage implements OnInit{

  
  constructor(
    private ion: IonService
  ) {
    
  }

  ngOnInit(): void {


  }


  onMoreIconClick(){
    this.ion.toast("点击了右边第二个图标")
  }
}
