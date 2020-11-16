import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';

/**
 * Utils类存放和业务无关的公共方法
 * @description
 */

@Injectable({
  providedIn: ServicesModule
})
export class Utils {

  constructor(
    // public translate: TranslateService
  ) {
  }

  static isEmpty(value): boolean {
    return value == null || typeof value === 'string' && value.length === 0;
  }

  static isNotEmpty(value): boolean {
    return !Utils.isEmpty(value);
  }

  /**
   * 格式“是”or“否”
   * @param value
   * @returns {string|string}
   */
  static formatYesOrNo(value: number | string): string {
    return value == 1 ? '是' : (value == '0' ? '否' : null);
  }



  /**
   * 日期对象转为日期字符串
   * @param date 需要格式化的日期对象
   * @param sFormat 输出格式,默认为yyyy-MM-dd hh:mm:ss                 年：y，月：M，日：d，时：h，分：m，秒：s
   * @example  dateFormat(new Date())                                "2017-02-28"
   * @example  dateFormat(new Date(),'yyyy-MM-dd')                   "2017-02-28"
   * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 09:24:00"
   * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
   * @example  dateFormat(new Date(),'yyyy-MM-ddThh:mm:ss+08:00')   "2017-02-28T09:24:00+08:00"
   * @returns {string}
   */
  dateFormat(date: Date, sFormat: String = 'yyyy-MM-dd hh:mm:ss', timetype = "24-hour"): string {
    let time = {
      Year: 0,
      TYear: '0',
      Month: 0,
      TMonth: '0',
      Day: 0,
      TDay: '0',
      Hour: 0,
      THour: '0',
      hour: 0,
      Thour: '0',
      Minute: 0,
      TMinute: '0',
      Second: 0,
      TSecond: '0',
      Millisecond: 0
    };
    time.Year = date.getFullYear();
    time.TYear = String(time.Year).substr(2);
    time.Month = date.getMonth() + 1;
    time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
    time.Day = date.getDate();
    time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
    time.Hour = date.getHours();
    time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
    if (timetype == '24-hour') {
      time.hour = time.Hour
    } else {
      time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
    }
    time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
    time.Minute = date.getMinutes();
    time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
    time.Second = date.getSeconds();
    time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
    time.Millisecond = date.getMilliseconds();

    return sFormat.replace(/yyyy/ig, String(time.Year))
      .replace(/yyy/ig, String(time.Year))
      .replace(/yy/ig, time.TYear)
      .replace(/y/ig, time.TYear)
      .replace(/MM/g, time.TMonth)
      .replace(/M/g, String(time.Month))
      .replace(/dd/ig, time.TDay)
      .replace(/d/ig, String(time.Day))
      .replace(/HH/g, time.THour)
      .replace(/H/g, String(time.Hour))
      .replace(/hh/g, time.Thour)
      .replace(/h/g, String(time.hour))
      .replace(/mm/g, time.TMinute)
      .replace(/m/g, String(time.Minute))
      .replace(/ss/ig, time.TSecond)
      .replace(/s/ig, String(time.Second))
      .replace(/fff/ig, String(time.Millisecond))
  }

  /**
   * 每次调用sequence加1
   * @type {()=>number}
   */
  getSequence = (function () {
    let sequence = 100;
    return function () {
      return ++sequence;
    };
  })();

  /**
   * 通过全路径获取文件存储路径
   *
   * @param {string} fullPath
   * @returns {string}
   * @memberof Utils
   */
  getFilePath(fullPath: string): string {
    return fullPath.slice(0, fullPath.lastIndexOf("/") + 1);
  }
  /**
   * 通过全路径获取文件名
   *
   * @param {string} fullPath
   * @returns {string}
   * @memberof Utils
   */
  getFileName(fullPath: string): string {
    return fullPath.slice(fullPath.lastIndexOf("/") + 1);
  }
  /**
   * 通过全路径获取文件类型(.jpg,.mp4等)
   *
   * @param {string} fullPath
   * @returns {string}
   * @memberof Utils
   */
  getFileType(fullPath: string): string {
    return fullPath.slice(fullPath.lastIndexOf("."));
  }

  /**
   * 通过全路径获取文件夹名字(文件夹以"/"结尾)
   *
   * @param {string} fullPath
   * @memberof Utils
   */
  getDirName(fullPath: string) {
    fullPath = fullPath.slice(0, fullPath.lastIndexOf("/"));
    return fullPath.slice(fullPath.lastIndexOf("/") + 1);
  }
  /**
  * 通过全路径获取文件夹路径(文件夹以"/"结尾)
  *
  * @param {string} fullPath
  * @memberof Utils
  */
  getDirPath(fullPath: string) {
    fullPath = fullPath.slice(0, fullPath.lastIndexOf("/"));
    return fullPath.slice(0, fullPath.lastIndexOf("/") + 1);
  }
  /**
   * 从多语言配置中读取string
   * @param str
   */
  // getString(str: string): string {
  //   let result = 'Undefined'
  //   this.translate.get(str).subscribe(
  //     value => {
  //       result = value
  //     }
  //   )
  //   return result
  // }
  /**
   *
   * @param password 判断密码是否合法
   */
  isPassWordAvailable(password: string): number {
    //DS安全红线,满足:数字/大写字母/小写字母/特殊符号其中两种情况
    var count: number = 0;
    if (this.isPasswordContainNum(password)) {
      count++;
    }
    if (this.isPasswordContainCapitalChar(password)) {
      count++;
    }
    if (this.isPasswordContainLowercase(password)) {
      count++;
    }
    if (this.isPasswordContainSpecialChar(password)) {
      count++;
    }
    return count;
  }
  /**
   *
   * @param password 是否包涵数字
   */
  isPasswordContainNum(password: string): boolean {
    //var regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
    var regex = new RegExp('(?=.*[0-9])');
    return regex.test(password);
  }
  /**
   *
   * @param password 是否包含大写字母
   */
  isPasswordContainCapitalChar(password: string): boolean {
    var regex = new RegExp('(?=.*[A-Z])');
    return regex.test(password);
  }
  /**
 *
 * @param password 是否包含小写字母
 */
  isPasswordContainLowercase(password: string): boolean {
    var regex = new RegExp('(?=.*[a-z])');
    return regex.test(password);
  }
  /**
 *
 * @param password 是否包含特殊字符
 */
  isPasswordContainSpecialChar(password: string): boolean {
    var regex = new RegExp('(?=.*[^a-zA-Z0-9])');
    return regex.test(password);
  }
  /**
   *
   * @param userCode
   * @param password
   * true:密码合格
   * false:不合格,密码与用户名相同或者倒叙相同
   */
  compareWithPassWord(userCode: string, password: string): boolean {
    //是否是空
    if (!userCode || !password) {
      return false;
    }
    //是否相等
    if (userCode == password) {
      return false;
    }
    //是否是倒叙相等
    if (this.reverse(password) == userCode) {
      return false;
    }
    return true;
  }
/**
 * 字符串倒叙返回
 *
 * @param {string} str
 * @returns {string}
 * @memberof Utils
 */
reverse(str: string): string {
    if (str.length == 0) return null;
    var i = str.length;
    var dstr = "";
    while (--i >= 0) {
      dstr += str.charAt(i);
    }
    return dstr;
  }

  /**
   * 获取当前的GPS位置
   */
  getCurrentLocation() {
    return new Promise<any>(function(resolve,reject){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          resolve(position);
        }, error => {
          reject(error)
        }, { enableHighAccuracy: true, timeout: 2000 });
      } else {
        reject('not support!')
      }
    });
  }




    /**
   * long型时间戳转字符串 yyyy-MM-dd HH:mm:ss
   */
  public dataTransfer(time: string): string {
    return this.dateFormat(new Date(parseInt(time)));
  }

    //时间 long 转 string
    public datetimeFormat(longTypeDate: number) {
      let date = new Date();
      date.setTime(longTypeDate);
  
      return this.dateFormat(date);
    }

  //播放声音
  public alarm(type=0){
    console.log(type)
    let name = 'alert.wav'
    switch(type){
      case 0:
        name = 'alert.wav';
        break;
      case 1:
        name = 'newcase.mp3';
        break;
      case 2:
        name = 'neworder.mp3';
        break;
    }
    let audio =  new Audio('assets/audio/'+name)
    audio.play();
  }

  //获取当前月份第一天
  public getMonthFirst(date: Date = new Date()):Date{
    date.setDate(1);
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    return date;
   }

   //获取当前月份最后一天
   public getMonthLast():Date{
    let date=new Date();
    let currentMonth=date.getMonth();
    let nextMonth=++currentMonth;
    let nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1).getTime();
    let oneDay=1000*60*60*24;
    return new Date(nextMonthFirstDay-oneDay);
   }

   //获取一天的开始时间
   public getDayFirstTime(date: Date = new Date()){
    return this.dateFormat(date,"yyyy-MM-dd")+" 00:00:00"
   }

  //  获取一周开始时间
  public getWeekFirstTime(date: Date = new Date()):string{
    let day = date.getDay();
    if(day === 0){
      //周日改成7
      day = 7;
    }
    let result = this.dateFormat(new Date(date.getTime() - (day-1)*24*60*60*1000),'yyyy-MM-dd')+" 00:00:00"
    console.log("一周开始时间",result)
    return result;
  }

   //获取一天的结束时间
   public getDayEndTime(date: Date = new Date()){
    return this.dateFormat(date,"yyyy-MM-dd")+" 59:59:59"
   }

   /**
    * 
    * @param year 判断是否是闰年
    */
   public isLeapYear(year: number):boolean{
     console.log("年份",year)
    // 被四整除，不是整百
    let flag1:boolean = year %4 === 0;
    let flag2:boolean = year %100 !== 0;
    // 是 400 的倍数
    let flag3: boolean = year % 400 === 0;
    let result = flag1 && flag2 || flag3
    if(result){
      return true;
    }else{
      return false
    }
   }
   /**
    * 获取月日
    * @param date 日期 808,八月八日
    */
   public getMonAndDay(date: Date): number{
    let mon = date.getMonth()+1;//月份从0开始
    let day = date.getDate();//第几天
    let temp:string = '';
    if(day<10){
      temp = "0";
    }
    let md = Number.parseInt(mon+temp+day);
    console.log("月日", md)
    return md;
   }
   public getGaMonth():string[]{
     //当前日期
     let curDate = new Date();
     let day = curDate.getDate();
     let year = curDate.getFullYear();
     let mon = curDate.getMonth()+1;//月份从0开始
     //开始时间
     let startTime = '';
    //  结束时间
     let endTime = '';
     if(day>26){
       curDate.setDate(26)
       endTime = this.dateFormat(curDate,'yyyy-MM-dd')+" 00:00:00"
     }else{
       endTime = this.dateFormat(curDate);
     }
     //1月的话
     if(mon === 1){
       year = year -1;
       mon = 12
     }else{
       mon  = mon-1
     }
     curDate.setMonth(mon-1)
     curDate.setFullYear(year)
     curDate.setDate(26)
     startTime = this.dateFormat(curDate,'yyyy-MM-dd')+" 00:00:00";
     return [startTime,endTime]
   }
}
