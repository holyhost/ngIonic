
//单位 --案由 都是这个实体类
export class MenuItemBean {

    public key: string;// 唯一标识符
    public value: string;// "通心岭派出所",
    public isLeaf: boolean;// "1",
    public childs: MenuItemBean[];// [],
    public selected: boolean;// 是否选中
    
    constructor(key='',value='',childs=[],selected = false,isLeaf = false){

        this.key = key
        this.value = value
        this.childs = childs;
        this.selected = selected
        this.isLeaf = isLeaf
    }
}