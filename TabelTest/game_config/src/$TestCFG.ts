module game_config {
	/**
	 * 导表测试
	 */
	export class $TestCFG {
		public ID:number;
		public HangBossID:number;
		public Name:string;
		public Icon:string;
		public DropIcon:string;
		public Job:number;
		public Gender:number;
		public ItemLvR:number;
		public ItemLv:number;
		public Rank:number;
		public LimitType:number;
		public LimitValue:number;
		public Quality:number;
		public NoEffect:number;
		public OuterFrame:number;
		public GridType:number;
		public Type1:number;
		public Type2:number;
		public Type3:number;
		public RelationID:number;
		public Team:number;
		public RecoverID:number;
		public DecomposeID:number;
		public Sort:number;
		public Stack:number;
		public Unusual:number;

		/**
		 * 读取txt文件填充数据, 返回配置ID
		 */
		public fillData(row:Array<string>):any {
			var filedArr:Array<string>;

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
		}

	}
}
