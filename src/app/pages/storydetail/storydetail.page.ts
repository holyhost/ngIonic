import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

/**
 * 文章详情界面
 */

@Component({
  selector: 'app-storydetail',
  templateUrl: 'storydetail.page.html',
  styleUrls: ['storydetail.page.scss']
})
export class StoryDetailPage implements OnInit{

  @ViewChild('body',{static:false}) body: TemplateRef<any>
  detail:string = ''
  title:string = ''
  storyBean: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService
  ) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.http.getStoryDetail(params['id']).subscribe(res=>{
        this.storyBean = res
        this.detail = this.storyBean.body
        this.body = this.storyBean.body
        this.title = this.storyBean.title
        document.getElementById('bodyContainer').innerHTML = this.detail
      })
    });

  }

}
