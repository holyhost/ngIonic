import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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

@Component({
  selector: 'app-filechoose',
  templateUrl: './filechoose.component.html',
  styleUrls: ['./filechoose.component.scss'],
})
/**
 * 待办事项条目
 */
export class FileChooseComponent implements OnInit {

  @Input() editable:boolean = true;
  @Input() files: FileInfo[] = [];
  @Output() upFiles =new EventEmitter<FileInfo[]>();
  // file类型的属性
  // lastModified: 1589514435693
  // lastModifiedDate: Fri May 15 2020 11:47:15 GMT+0800 (中国标准时间) {}
  // name: "Fastdfs接口文档 - 1.3.0.doc"
  // size: 103424
  // type: "application/msword"
  // webkitRelativePath: ""
  // 获取文件上传的inputHTML元素

  currentPopover = null;
  constructor(
  ) {

  }

  ngOnInit() {

  }

  fileClick(item) {

  }
  //上传文件按钮
  upClick() {
    this.upFiles.emit(this.files)
  }

  /**
   * 选择文件后触发此方法
   * @param event 
   */
  fileChange(event) {
    // 获取选中的文件数组
    let chooseFiles:FileList = event.target.files;
    //添加到文件列表里面
    for(let i=0;i<chooseFiles.length;i++){
      this.files.push(new FileInfo(chooseFiles[i]))
      console.log("文件类型："+chooseFiles[i].type)
    }
    // this.http.uploadFile(chooseFiles[0],true)

  }
  removeFile(item:File){
    // this.files.reduce()
    this.files = this.files.filter(i => i.file!=item)
  }

  public getFiles(){
    return this.files
  }
  public setFiles(files: FileInfo[]){
    this.files = files;
  }

}

