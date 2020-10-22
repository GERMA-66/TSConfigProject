
/**
 * 导表测试 - 副本
 */
class Test1CFG extends game_config.$Test1CFG implements ITxtTable {

    public get nextCFG():Test1CFG {
        return getTable(Tables.Test1CFG, this.ID + 1);
    }
}
