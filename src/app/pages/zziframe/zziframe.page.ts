import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

/**
 * iframe界面,展示链接用
 */

@Component({
  selector: 'app-zziframe',
  templateUrl: 'zziframe.page.html',
  styleUrls: ['zziframe.page.scss']
})
export class ZzIframePage implements OnInit{

  aimUrl:SafeResourceUrl //目标url
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.aimUrl = this.sanitizer.bypassSecurityTrustResourceUrl(params['url']);
    });

  }

}
