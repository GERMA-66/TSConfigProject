var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 表名字
 * Created By WZH
 */
var Tables = (function () {
    function Tables() {
    }
    /**单位表 */
    Tables.UnitCFG = "UnitCFG";
    /**测试表 */
    Tables.TestCFG = "TestCFG";
    /**测试表-副本 */
    Tables.Test1CFG = "Test1CFG";
    return Tables;
}());
__reflect(Tables.prototype, "Tables");
//# sourceMappingURL=Tables.js.map