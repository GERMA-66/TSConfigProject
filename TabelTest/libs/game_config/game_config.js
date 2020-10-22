var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game_config;
(function (game_config) {
    /**
     * 导表测试 - 副本
     */
    var $Test1CFG = (function () {
        function $Test1CFG() {
        }
        /**
         * 读取txt文件填充数据, 返回配置ID
         */
        $Test1CFG.prototype.fillData = function (row) {
            var filedArr;
            this.ID = +row[0];
            this.Name = row[1];
            this.Retype = +row[2];
            this.Type1 = +row[3];
            this.Type2 = +row[4];
            this.Kind = +row[5];
            this.CloneType = +row[6];
            this.MapTypeSort = +row[7];
            this.UiHide = +row[8];
            this.PKModeVal = +row[9];
            if (row[10] == "") {
                this.PKModelType = new Array();
            }
            else {
                filedArr = row[10].split(',');
                this.PKModelType = new Array();
                for (var i = 0; i < filedArr.length; i++) {
                    this.PKModelType[i] = +filedArr[i];
                }
            }
            this.ProtectLv = +row[11];
            this.MinLvR = +row[12];
            this.MinLv = +row[13];
            this.MaxLvR = +row[14];
            this.MaxLv = +row[15];
            this.MinGodLv = +row[16];
            this.MaxGodLv = +row[17];
            this.NeedChangeJob = +row[18];
            return this.ID;
        };
        return $Test1CFG;
    }());
    game_config.$Test1CFG = $Test1CFG;
    __reflect($Test1CFG.prototype, "game_config.$Test1CFG");
})(game_config || (game_config = {}));
var game_config;
(function (game_config) {
    /**
     * 导表测试
     */
    var $TestCFG = (function () {
        function $TestCFG() {
        }
        /**
         * 读取txt文件填充数据, 返回配置ID
         */
        $TestCFG.prototype.fillData = function (row) {
            var filedArr;
            this.ID = +row[0];
            this.HangBossID = +row[1];
            this.Name = row[2];
            this.Icon = row[3];
            this.DropIcon = row[4];
            this.Job = +row[5];
            this.Gender = +row[6];
            this.ItemLvR = +row[7];
            this.ItemLv = +row[8];
            this.Rank = +row[9];
            this.LimitType = +row[10];
            this.LimitValue = +row[11];
            this.Quality = +row[12];
            this.NoEffect = +row[13];
            this.OuterFrame = +row[14];
            this.GridType = +row[15];
            this.Type1 = +row[16];
            this.Type2 = +row[17];
            this.Type3 = +row[18];
            this.RelationID = +row[19];
            this.Team = +row[20];
            this.RecoverID = +row[21];
            this.DecomposeID = +row[22];
            this.Sort = +row[23];
            this.Stack = +row[24];
            this.Unusual = +row[25];
            return this.ID;
        };
        return $TestCFG;
    }());
    game_config.$TestCFG = $TestCFG;
    __reflect($TestCFG.prototype, "game_config.$TestCFG");
})(game_config || (game_config = {}));
var game_config;
(function (game_config) {
    /**
     * 单位表
     */
    var $UnitCFG = (function () {
        function $UnitCFG() {
        }
        /**
         * 读取txt文件填充数据, 返回配置ID
         */
        $UnitCFG.prototype.fillData = function (row) {
            var filedArr;
            this.ID = +row[0];
            this.HangBossID = +row[1];
            this.Name = row[2];
            this.NoColorName = row[3];
            this.OwnGang = row[4];
            this.EditDir = row[5];
            this.UnitTeam = +row[6];
            this.Type1 = +row[7];
            this.Type2 = +row[8];
            this.Type3 = +row[9];
            this.PrefixComparison = +row[10];
            this.IsNotShake = row[11] == "1" ? true : false;
            this.IsPerson = row[12] == "1" ? true : false;
            this.Level = +row[13];
            this.Clothes = +row[14];
            this.Weapon = +row[15];
            this.Wing = +row[16];
            this.Shadow = +row[17];
            this.TitleID = +row[18];
            this.CollectResID = +row[19];
            this.UpIcon = row[20];
            if (row[21] == "") {
                this.HeadInfoPos = new Array();
            }
            else {
                filedArr = row[21].split(',');
                this.HeadInfoPos = new Array();
                for (var i = 0; i < filedArr.length; i++) {
                    this.HeadInfoPos[i] = +filedArr[i];
                }
            }
            if (row[22] == "") {
                this.ShoutInfoPos = new Array();
            }
            else {
                filedArr = row[22].split(',');
                this.ShoutInfoPos = new Array();
                for (var i = 0; i < filedArr.length; i++) {
                    this.ShoutInfoPos[i] = +filedArr[i];
                }
            }
            this.PointID = +row[23];
            this.CFuncID = +row[24];
            if (row[25] == "") {
                this.CFuncParam = new Array();
            }
            else {
                filedArr = row[25].split(',');
                this.CFuncParam = new Array();
                for (var i = 0; i < filedArr.length; i++) {
                    this.CFuncParam[i] = filedArr[i];
                }
            }
            this.Dialog = row[26];
            this.ShoutID = +row[27];
            this.SortBottom = row[28] == "1" ? true : false;
            this.HideFade = row[29] == "1" ? true : false;
            this.HideName = row[30] == "1" ? true : false;
            this.HideSelect = row[31] == "1" ? true : false;
            this.HeadIcon = row[32];
            this.PlayEffect = +row[33];
            this.BornKind = +row[34];
            this.BornCantMouse = row[35] == "1" ? true : false;
            this.DelayShowTime = +row[36];
            this.ShowDamage = row[37] == "1" ? true : false;
            this.isClickAttack = row[38] == "1" ? true : false;
            this.AttrID = +row[39];
            this.SimpleDropID = +row[40];
            this.Dis = +row[41];
            this.Grave = +row[42];
            this.IsShowHeadInfo = +row[43];
            this.NoOwner = row[44] == "1" ? true : false;
            this.IsShowOwnerName = row[45] == "1" ? true : false;
            this.SpecialOwnerType = +row[46];
            if (row[47] == "") {
                this.SkillID = new Array();
            }
            else {
                filedArr = row[47].split(',');
                this.SkillID = new Array();
                for (var i = 0; i < filedArr.length; i++) {
                    this.SkillID[i] = +filedArr[i];
                }
            }
            this.ResScale = +row[48];
            this.CanFly = row[49] == "1" ? true : false;
            this.NoCut = row[50] == "1" ? true : false;
            this.NoSlash = row[51] == "1" ? true : false;
            this.NoChangeSheep = row[52] == "1" ? true : false;
            this.SoleRing = +row[53];
            this.IsAroundBoss = +row[54];
            this.IsGuide = +row[55];
            this.PlayExpEffect = +row[56];
            this.NpcMatchBoss = +row[57];
            this.NoHpVisible = row[58] == "1" ? true : false;
            return this.ID;
        };
        return $UnitCFG;
    }());
    game_config.$UnitCFG = $UnitCFG;
    __reflect($UnitCFG.prototype, "game_config.$UnitCFG");
})(game_config || (game_config = {}));
