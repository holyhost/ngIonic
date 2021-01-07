/**
 * 搜索控件的类型实体类
 */

export class SearchTypeBean {

    public key: string;
    public value: string;
    public selected: boolean;
    public type: number;//类型，1开头是第一行筛选，2开头是第二行的筛选
    public data: any[];

    constructor(key: string, value: string = '', selceted = false, type = 100) {
        this.key = key;
        this.value = value;
        this.selected = selceted;
        this.type = type;
        this.data = []
    }

}

//  搜索界面，排序，类型

export enum SortTypeEnum {
    Label = 100,//类型
    Menu = 101,//菜单，需要点进去选择的，单选，不需要取消确认键了
    Menux = 102,//菜单，需要点进去选择的，多选
    Sortu = 104,//排序的，比如说时间：倒序，顺序,上升箭头
    Sortd = -104,//排序的，比如说时间：倒序，顺序，下降箭头
}