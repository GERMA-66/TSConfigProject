/**
 * 表函数
 * Created By WZH
 */

/**
 * 获取单个表数据
 */
function getTable(name: string, id: any): any {
    return TableMainManager.instance.getTxtTable(name, id);
}

/**
 * 获取整个表数据
 */
function getTables(name: string): any {
    return TableMainManager.instance.getTxtTables(name);
}