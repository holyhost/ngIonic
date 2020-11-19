import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError, timeout, finalize, } from 'rxjs/internal/operators';
import { IonService } from './ion.servic';
import { BaseBean } from './data-type/base.type';
import { Utils } from './utils';
import { Story } from './data-type/story.zhihu.type';
import { of } from 'rxjs';



@Injectable({
  providedIn: ServicesModule
})
export class HttpService {
  
  constructor(
    public http: HttpClient,
    private ion: IonService,
    private util: Utils,
  ) {
    

  }

  loadLocalOrgs(){
    return this.http.get("").pipe(
      map((data: { result: BaseBean[] }) => {
        if (data && data.result && data.result.length > 0) {
          // this.orgList = data.result
          return 3
        } else {
          return 0
        }
      }),
    )
  }

  /**
   * 加载知乎每日的推荐数据
   * @param date 时间
   */
  loadZhihuNews(date:string='20201111'){
    console.log("时间是："+date)
    if(Number.parseInt(date)<20201116){
      return of([])
    }
    return this.http.get('zhihu/before/'+date).pipe(
      map((res:{date:string,stories:Story[]})=>res.stories)
    )
  }

  getStoryDetail(id: number){
    console.log("文章id："+id)
    return this.http.get('zhihu/'+id)

  }

}
