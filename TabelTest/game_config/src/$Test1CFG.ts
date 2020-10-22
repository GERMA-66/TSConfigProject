module game_config {
	/**
	 * 导表测试 - 副本
	 */
	export class $Test1CFG {
		public ID:number;
		public Name:string;
		public Retype:number;
		public Type1:number;
		public Type2:number;
		public Kind:number;
		public CloneType:number;
		public MapTypeSort:number;
		public UiHide:number;
		public PKModeVal:number;
		public PKModelType:Array<number>;
		public ProtectLv:number;
		public MinLvR:number;
		public MinLv:number;
		public MaxLvR:number;
		public MaxLv:number;
		public MinGodLv:number;
		public MaxGodLv:number;
		public NeedChangeJob:number;

		/**
		 * 读取txt文件填充数据, 返回配置ID
		 */
		public fillData(row:Array<string>):any {
			var filedArr:Array<string>;

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
				this.PKModelType = new Array<number>();
			} else {
				filedArr = row[10].split(',');
				this.PKModelType = new Array<number>();
				for (var i = 0;i < filedArr.length;i ++) {
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
		}

	}
}
