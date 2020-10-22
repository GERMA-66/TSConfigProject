/**
 * 表接口
 * Created By WZH
 */
interface ITxtTable {

    /**
     * 填充数据，返回唯一索引
     */
    fillData(dataText: Array<string>): any;
}