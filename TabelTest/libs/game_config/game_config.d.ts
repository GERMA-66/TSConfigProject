declare module game_config {
    /**
     * 导表测试 - 副本
     */
    class $Test1CFG {
        ID: number;
        Name: string;
        Retype: number;
        Type1: number;
        Type2: number;
        Kind: number;
        CloneType: number;
        MapTypeSort: number;
        UiHide: number;
        PKModeVal: number;
        PKModelType: Array<number>;
        ProtectLv: number;
        MinLvR: number;
        MinLv: number;
        MaxLvR: number;
        MaxLv: number;
        MinGodLv: number;
        MaxGodLv: number;
        NeedChangeJob: number;
        /**
         * 读取txt文件填充数据, 返回配置ID
         */
        fillData(row: Array<string>): any;
    }
}
declare module game_config {
    /**
     * 导表测试
     */
    class $TestCFG {
        ID: number;
        HangBossID: number;
        Name: string;
        Icon: string;
        DropIcon: string;
        Job: number;
        Gender: number;
        ItemLvR: number;
        ItemLv: number;
        Rank: number;
        LimitType: number;
        LimitValue: number;
        Quality: number;
        NoEffect: number;
        OuterFrame: number;
        GridType: number;
        Type1: number;
        Type2: number;
        Type3: number;
        RelationID: number;
        Team: number;
        RecoverID: number;
        DecomposeID: number;
        Sort: number;
        Stack: number;
        Unusual: number;
        /**
         * 读取txt文件填充数据, 返回配置ID
         */
        fillData(row: Array<string>): any;
    }
}
declare module game_config {
    /**
     * 单位表
     */
    class $UnitCFG {
        ID: number;
        HangBossID: number;
        Name: string;
        NoColorName: string;
        OwnGang: string;
        EditDir: string;
        UnitTeam: number;
        Type1: number;
        Type2: number;
        Type3: number;
        PrefixComparison: number;
        IsNotShake: boolean;
        IsPerson: boolean;
        Level: number;
        Clothes: number;
        Weapon: number;
        Wing: number;
        Shadow: number;
        TitleID: number;
        CollectResID: number;
        UpIcon: string;
        HeadInfoPos: Array<number>;
        ShoutInfoPos: Array<number>;
        PointID: number;
        CFuncID: number;
        CFuncParam: Array<string>;
        Dialog: string;
        ShoutID: number;
        SortBottom: boolean;
        HideFade: boolean;
        HideName: boolean;
        HideSelect: boolean;
        HeadIcon: string;
        PlayEffect: number;
        BornKind: number;
        BornCantMouse: boolean;
        DelayShowTime: number;
        ShowDamage: boolean;
        isClickAttack: boolean;
        AttrID: number;
        SimpleDropID: number;
        Dis: number;
        Grave: number;
        IsShowHeadInfo: number;
        NoOwner: boolean;
        IsShowOwnerName: boolean;
        SpecialOwnerType: number;
        SkillID: Array<number>;
        ResScale: number;
        CanFly: boolean;
        NoCut: boolean;
        NoSlash: boolean;
        NoChangeSheep: boolean;
        SoleRing: number;
        IsAroundBoss: number;
        IsGuide: number;
        PlayExpEffect: number;
        NpcMatchBoss: number;
        NoHpVisible: boolean;
        /**
         * 读取txt文件填充数据, 返回配置ID
         */
        fillData(row: Array<string>): any;
    }
}
