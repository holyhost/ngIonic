import { BaseBean } from 'src/app/services/data-type/base.type';

//日期选择控件一些常量

// 时间可供选择的类型
export enum DateChooseType{
     yesterday = 'yesterday',
     today = 'today',
     week = 'week',
     recent7 = 'recent7',//最近7天
     month = 'month',
     recent30 = 'recent30',//最近30天
     gamonth = 'gamonth',
     year = 'year',
     deftime = 'deftime',
}

// 时间选择类
export class DateChoose{

}

//首页菜单栏
export const MenuTypeList=[
    new BaseBean(DateChooseType.yesterday,'昨日',false,'div-stopper'),
    new BaseBean(DateChooseType.today,'今日',true,'div-stopper'),//默认选择的是今天
    new BaseBean(DateChooseType.week,'本周',false,'div-stopper'),
    new BaseBean(DateChooseType.recent7,'近7天',false,'div-stopper'),
    new BaseBean(DateChooseType.month,'本月',false,'div-stopper'),
    new BaseBean(DateChooseType.recent30,'近30天',false,'div-stopper'),
    new BaseBean(DateChooseType.gamonth,'公安月',false,'div-stopper'),
    new BaseBean(DateChooseType.year,'今年',false,'div-stopper'),
    new BaseBean(DateChooseType.deftime,'自定义',false,'div-stopper'),
]