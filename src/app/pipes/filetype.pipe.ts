import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pftype'
})
export class FileTypePipe implements PipeTransform {
  //等级
  transform(value: string): any {
    let fileIndex = this.getFileIndex(value)
    //转为小写
    fileIndex = fileIndex.toLowerCase();
    if (fileIndex.indexOf("doc") != -1||fileIndex.indexOf("word") != -1) {
      return "./assets/img/icon_word.png";
    }
    if (fileIndex.indexOf("mp4") != -1||fileIndex.indexOf("avi") != -1||fileIndex.indexOf("mov") != -1||fileIndex.indexOf("mpeg") != -1) {
      return "./assets/img/icon_video.png";
    }
    if (fileIndex.indexOf("txt") != -1||fileIndex.indexOf("xml") != -1) {
      return "./assets/img/icon_txt.png";
    }
    if (fileIndex.indexOf("mp3") != -1||fileIndex.indexOf("mpeg") != -1||fileIndex.indexOf("wma") != -1||fileIndex.indexOf("aac") != -1) {
      return "./assets/img/icon_mp3.png";
    }
    if (fileIndex.indexOf("png") != -1||fileIndex.indexOf("jpg") != -1||fileIndex.indexOf("jpeg") != -1) {
      return "./assets/img/icon_img.png";
    }
    if (fileIndex.indexOf("ppt") != -1) {
      return "./assets/img/icon_ppt.png";
    }
    if (fileIndex.indexOf("pdf") != -1) {
      return "./assets/img/icon_pdf.png";
    }
    if (fileIndex.indexOf("excel") != -1) {
      return "./assets/img/icon_excel.png";
    }
    if (fileIndex.indexOf("zip") != -1||fileIndex.indexOf("rar") != -1||fileIndex.indexOf("7z") != -1) {
      return "./assets/img/icon_zip.png";
    }
    //默认图片
    return "./assets/img/icon_file_default.png";
    
  }


  //获取文件后缀
  getFileIndex(fileName: string): string {

    //文件名称存在，有长度，并且包含 .
    if (fileName && fileName.length > 0 && fileName.indexOf('.') > -1) {
      let dotIndex = fileName.lastIndexOf('.');
      let fileIndex = fileName.substring(dotIndex + 1)
      console.log("文件后缀：" + fileIndex)
      return fileIndex;
    } else {
      return "";
    }
  }

}
