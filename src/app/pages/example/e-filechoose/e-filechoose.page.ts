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
  selector: 'app-e-filechoose',
  templateUrl: 'e-filechoose.page.html',
  styleUrls: ['e-filechoose.page.scss']
})
export class EFileChoosePage implements OnInit{
  
  @ViewChild('filechoose',{static: false}) filechoose:FileChooseComponent;
  
  constructor(
    private ion: IonService,
    private http: HttpService,
  ) {
    
  }

  ngOnInit(): void {


  }


  //上传文件
upFiles(data:FileInfo[]){

  if(!data|| data.length<0){
    this.ion.toast("文件列表为空！")
    return;
  }
  data = data.filter(item => !item.status)
  let uploadedFiles = data.filter(item => item.status)
  //没有上传过的
  if(!data|| data.length<0){
    this.ion.toast("无可上传文件！")
    return;
  }

    let posts:Observable<FileInfoBean[]>[] = [];
    data.forEach(file=>{
      let post =this.http.uploadFile(file.file,true)
      posts.push(post)
    })
    forkJoin(posts)
    .subscribe(results=>{
      if(results&& results.length>0){
        
      }else{
        this.ion.toast("图片上传失败！")
      }
    })
  
}
}
