var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 导表测试 - 副本
 */
var Test1CFG = (function (_super) {
    __extends(Test1CFG, _super);
    function Test1CFG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Test1CFG.prototype, "nextCFG", {
        get: function () {
            return getTable(Tables.Test1CFG, this.ID + 1);
        },
        enumerable: true,
        configurable: true
    });
    return Test1CFG;
}(game_config.$Test1CFG));
__reflect(Test1CFG.prototype, "Test1CFG", ["ITxtTable"]);
//# sourceMappingURL=Test1CFG.js.map