// 基础数据类型，用于表单，多选，单选等界面
export class BaseBean{
    public key: string;
    public color: string;
    public value: string;
    public selected: boolean;
    constructor(key:string,value:string = '',selceted=false,color='red'){
        this.key = key;
        this.value = value;
        this.selected = selceted;
        this.color = color;
    }
}


