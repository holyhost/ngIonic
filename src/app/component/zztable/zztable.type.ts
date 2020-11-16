/**
 * 数据类型
 */
export class ZzTableBean{
    public key: string;
    public value: string|number;
    public selected: boolean;
    public color: string;
    public type: string;//类型：文字text，图片pic，混合型mix（带有上升下降的箭头）

    constructor(key='',value='',selected=false,type='text',color='gray'){

        this.key = key
        this.value = value
        this.selected = selected
        this.color = color
        this.type = type
    }
}