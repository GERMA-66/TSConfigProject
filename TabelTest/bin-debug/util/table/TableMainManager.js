var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TableMainManager = (function () {
    function TableMainManager() {
        this._txtTables = {};
    }
    Object.defineProperty(TableMainManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new TableMainManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableMainManager.prototype, "txtTabels", {
        get: function () {
            return this._txtTables;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 注册表数据
     */
    TableMainManager.prototype.registerTxtTables = function (name, text) {
        if (!name || name == "")
            return egret.error("name is null");
        var clazz = egret.getDefinitionByName(name);
        if (clazz == null) {
            return;
        }
        var dict = this._txtTables[name];
        if (!dict || dict == null) {
            dict = this._txtTables[name] = {};
        }
        var tableLines = text.split("\r\n");
        var length = tableLines.length;
        for (var i = 0; i < length; i++) {
            var line = tableLines[i];
            if (line == "") {
                egret.error("TableManager.registerTxtTables Error:Table " + name + " line " + (i + 1) + " is empty!");
                continue;
            }
            var table = new clazz();
            var id = table.fillData(line.split("\t"));
            dict[id] = table;
        }
    };
    TableMainManager.prototype.unregisterTxtTables = function (name, id) {
        var dict = this._txtTables[name];
        if (dict != null) {
            delete dict[id];
        }
    };
    TableMainManager.prototype.getTxtTables = function (name) {
        return this._txtTables[name];
    };
    /**
     * 获取Txt数据表
     */
    TableMainManager.prototype.getTxtTable = function (name, id) {
        var dict = this.getTxtTables(name);
        if (dict != null) {
            return dict[id];
        }
        return null;
    };
    return TableMainManager;
}());
__reflect(TableMainManager.prototype, "TableMainManager");
//# sourceMappingURL=TableMainManager.js.map