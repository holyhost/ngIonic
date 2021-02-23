import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { map } from 'rxjs/internal/operators/map';
import { Story } from 'src/app/services/data-type/story.zhihu.type';
import { HttpService } from 'src/app/services/http.service';
import { IonService } from 'src/app/services/ion.servic';
import { Utils } from 'src/app/services/utils';

/**
 * 列表
 */

@Component({
  selector: 'app-listview',
  templateUrl: 'listview.page.html',
  styleUrls: ['listview.page.scss']
})
export class ListViewPage implements OnInit,AfterContentInit,AfterViewInit,OnDestroy {

  data: Story[] = []//知乎条目数据
  //时间 8位20201212
  date: string = '';

  @ViewChild('IonInfiniteScroll') infiniteScroll: IonInfiniteScroll;

  constructor(
    public http: HttpService,
    public ion: IonService,
    public util: Utils,
    public router: Router,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.date = this.util.dateFormat(new Date(), 'yyyyMMdd')
    setTimeout(() => {
    this.loadData(true, false, this.date)
    }, 2000);
    this.test()
  }

  /**
   * 请求数据
   * @param refresh 是否刷新，true：清空数据；false：拼接数据
   * @param showLoading  是否显示转圈圈
   * @param date  目标时间
   * @param mevent 上滑事件
   * @param revent 下拉事件
   */
  loadData(refresh: boolean = true,
    showLoading: boolean = true,
    date: string = '',
    revent = null, mevent = null) {
    if (showLoading) {
      // 展示转圈圈
      this.ion.showLoading()
    }
    this.http.loadZhihuNews(date).subscribe(res => {
      if (showLoading) {
        //关闭转圈圈
        this.ion.dismissLoading()
      }
      //有数据的前提下，对数据进行处理
      if (res && res.length > 0) {
        if (refresh) {
          this.data = []
        }
        this.data = this.data.concat(res)
      }else if(this.data.length>10){
        this.toggleInfiniteScroll()
      }

      //上拉加载更多==>关闭显示
      mevent && mevent.target.complete();
      // 下拉刷新==>关闭显示
      revent && revent.target.complete()
      console.log(res)
    }, error => {
      this.ion.toast("请求失败！")
      console.log(error)
    })
  }

  /**
   * 执行刷新操作
   * @param event 下拉刷新事件
   */
  doRefresh(event) {
    //重置当前时间参数
    this.date = this.util.dateFormat(new Date(), 'yyyyMMdd')
    this.loadData(true, false, this.date, event, null)
  }

  /**
   * 加载更多
   * @param event 上拉加载更多事件
   */
  onMoreData(event) {

    this.date = Number.parseInt(this.date) - 1 + ''
    this.loadData(false, false, this.date, null, event)
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  onItemClick(item:any){

    this.router.navigate(['/storydetail'],{queryParams:{id:item.id}})
  }
  test(){
    this.http.loadZhihuNews().pipe(
      map((res)=>  console.log("第1个map："+res)),
      map(res=>  {
        console.log("第2 个map="+res)
        return 'aa'
      }),
      map((res)=>  {
        console.log("第3 个map="+res)
        return {aa:123}
      })

    ).subscribe(res=>{
    //  aa.unsubscribe()
    console.log('最后的结果是：'+res)
    })
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit,AfterViewInit,OnDestroy' to the class.
    console.log("生命周期-AfterContentInit")
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("生命周期-AfterViewInit")
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("生命周期-OnDestroy")
  }
}
