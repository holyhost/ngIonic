import { Component, OnInit, ViewChild } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { FileChooseComponent } from 'src/app/component/filechoose/filechoose.component';
import { FileInfoBean } from 'src/app/services/data-type/fileinfo.type';
import { HttpService } from 'src/app/services/http.service';
import { IonService } from 'src/app/services/ion.servic';
export class FileInfo{
  file:File;
  name:string;
  size:number;
  type:string;
  url:string;
  code:string;
  status:boolean=false;
  lastModified:number;
  constructor(f:File){
    this.file = f;
    this.name = f.name;
    this.size = f.size;
    this.lastModified = f.lastModified;
    this.type = f.type;
  }
}

/**
 * 文件选择案例界面
 */

@Component({
  selector: 'app-e-menu2',
  templateUrl: 'e-menu2.page.html',
  styleUrls: ['e-menu2.page.scss']
})
export class EMenu2Page implements OnInit{
  
  @ViewChild('filechoose',{static: false}) filechoose:FileChooseComponent;
  
  constructor(
    private ion: IonService,
    private http: HttpService,
  ) {
    
  }

  ngOnInit(): void {


  }

  initBaseData(){
    
  }

}
