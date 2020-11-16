import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError, timeout, finalize, } from 'rxjs/internal/operators';
import { IonService } from './ion.servic';
import { BaseBean } from './data-type/base.type';
import { Utils } from './utils';



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


}
