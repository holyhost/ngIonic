import { Component, OnInit, ViewChild } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { DateChooseType } from 'src/app/component/datechoose/datechoose.type';
import { DateChooseComponent } from 'src/app/component/datechoose/datehoose.component';
import { FileChooseComponent } from 'src/app/component/filechoose/filechoose.component';
import { FileInfoBean } from 'src/app/services/data-type/fileinfo.type';
import { HttpService } from 'src/app/services/http.service';
import { IonService } from 'src/app/services/ion.servic';

/**
 * 文件选择案例界面
 */

@Component({
  selector: 'app-e-datechoose',
  templateUrl: 'e-datechoose.page.html',
  styleUrls: ['e-datechoose.page.scss']
})
export class EDateChoosePage implements OnInit {

  //开始时间
  startTime: string;
  // 结束时间
  endTime: string;
  //开始时间1
  startTime1: string;
  // 结束时间1
  endTime1: string;

  mytype: string[];

  constructor(
    private ion: IonService,
    private http: HttpService,
  ) {

  }

  ngOnInit(): void {
    this.mytype=[DateChooseType.yesterday, DateChooseType.today, DateChooseType.recent7, DateChooseType.deftime]

  }


  onDateChanged(data: string[]) {
    console.log(data)
    if (data.length > 0) {
      this.startTime = data[0]
      this.endTime = data[1]
    }
  }
  onDateChanged1(data: string[]) {
    console.log(data)
    if (data.length > 0) {
      this.startTime1 = data[0]
      this.endTime1 = data[1]
    }
  }
}
