/**
 * 搜索控件的类型实体类
 */

export class SearchTypeBean {

    public key: string;
    public value: string;
    public selected: boolean;
    public type: number;//类型，1开头是第一行筛选，2开头是第二行的筛选
    public data: [];

    constructor(key: string, value: string = '', selceted = false, type = 100) {
        this.key = key;
        this.value = value;
        this.selected = selceted;
        this.type = type;
    }

}

//  搜索界面，排序，类型

export enum SortTypeEnum {
    Label = 100,//类型
    Menu = 101,//菜单，需要点进去选择的，单选
    Menux = 102,//菜单，需要点进去选择的，多选
    Sort = 104,//排序的，比如说时间：倒序，顺序
}