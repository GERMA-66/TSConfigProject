module game_config {
	/**
	 * 单位表
	 */
	export class $UnitCFG {
		public ID:number;
		public HangBossID:number;
		public Name:string;
		public NoColorName:string;
		public OwnGang:string;
		public EditDir:string;
		public UnitTeam:number;
		public Type1:number;
		public Type2:number;
		public Type3:number;
		public PrefixComparison:number;
		public IsNotShake:boolean;
		public IsPerson:boolean;
		public Level:number;
		public Clothes:number;
		public Weapon:number;
		public Wing:number;
		public Shadow:number;
		public TitleID:number;
		public CollectResID:number;
		public UpIcon:string;
		public HeadInfoPos:Array<number>;
		public ShoutInfoPos:Array<number>;
		public PointID:number;
		public CFuncID:number;
		public CFuncParam:Array<string>;
		public Dialog:string;
		public ShoutID:number;
		public SortBottom:boolean;
		public HideFade:boolean;
		public HideName:boolean;
		public HideSelect:boolean;
		public HeadIcon:string;
		public PlayEffect:number;
		public BornKind:number;
		public BornCantMouse:boolean;
		public DelayShowTime:number;
		public ShowDamage:boolean;
		public isClickAttack:boolean;
		public AttrID:number;
		public SimpleDropID:number;
		public Dis:number;
		public Grave:number;
		public IsShowHeadInfo:number;
		public NoOwner:boolean;
		public IsShowOwnerName:boolean;
		public SpecialOwnerType:number;
		public SkillID:Array<number>;
		public ResScale:number;
		public CanFly:boolean;
		public NoCut:boolean;
		public NoSlash:boolean;
		public NoChangeSheep:boolean;
		public SoleRing:number;
		public IsAroundBoss:number;
		public IsGuide:number;
		public PlayExpEffect:number;
		public NpcMatchBoss:number;
		public NoHpVisible:boolean;

		/**
		 * 读取txt文件填充数据, 返回配置ID
		 */
		public fillData(row:Array<string>):any {
			var filedArr:Array<string>;

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
			this.IsNotShake= row[11] == "1" ? true : false;
			this.IsPerson= row[12] == "1" ? true : false;
			this.Level = +row[13];
			this.Clothes = +row[14];
			this.Weapon = +row[15];
			this.Wing = +row[16];
			this.Shadow = +row[17];
			this.TitleID = +row[18];
			this.CollectResID = +row[19];
			this.UpIcon = row[20];
			if (row[21] == "") {
				this.HeadInfoPos = new Array<number>();
			} else {
				filedArr = row[21].split(',');
				this.HeadInfoPos = new Array<number>();
				for (var i = 0;i < filedArr.length;i ++) {
					this.HeadInfoPos[i] = +filedArr[i];
				}
			}
			if (row[22] == "") {
				this.ShoutInfoPos = new Array<number>();
			} else {
				filedArr = row[22].split(',');
				this.ShoutInfoPos = new Array<number>();
				for (var i = 0;i < filedArr.length;i ++) {
					this.ShoutInfoPos[i] = +filedArr[i];
				}
			}
			this.PointID = +row[23];
			this.CFuncID = +row[24];
			if (row[25] == "") {
				this.CFuncParam = new Array<string>();
			} else {
				filedArr = row[25].split(',');
				this.CFuncParam = new Array<string>();
				for (var i = 0;i < filedArr.length;i ++) {
					this.CFuncParam[i] = filedArr[i];
				}
			}
			this.Dialog = row[26];
			this.ShoutID = +row[27];
			this.SortBottom= row[28] == "1" ? true : false;
			this.HideFade= row[29] == "1" ? true : false;
			this.HideName= row[30] == "1" ? true : false;
			this.HideSelect= row[31] == "1" ? true : false;
			this.HeadIcon = row[32];
			this.PlayEffect = +row[33];
			this.BornKind = +row[34];
			this.BornCantMouse= row[35] == "1" ? true : false;
			this.DelayShowTime = +row[36];
			this.ShowDamage= row[37] == "1" ? true : false;
			this.isClickAttack= row[38] == "1" ? true : false;
			this.AttrID = +row[39];
			this.SimpleDropID = +row[40];
			this.Dis = +row[41];
			this.Grave = +row[42];
			this.IsShowHeadInfo = +row[43];
			this.NoOwner= row[44] == "1" ? true : false;
			this.IsShowOwnerName= row[45] == "1" ? true : false;
			this.SpecialOwnerType = +row[46];
			if (row[47] == "") {
				this.SkillID = new Array<number>();
			} else {
				filedArr = row[47].split(',');
				this.SkillID = new Array<number>();
				for (var i = 0;i < filedArr.length;i ++) {
					this.SkillID[i] = +filedArr[i];
				}
			}
			this.ResScale = +row[48];
			this.CanFly= row[49] == "1" ? true : false;
			this.NoCut= row[50] == "1" ? true : false;
			this.NoSlash= row[51] == "1" ? true : false;
			this.NoChangeSheep= row[52] == "1" ? true : false;
			this.SoleRing = +row[53];
			this.IsAroundBoss = +row[54];
			this.IsGuide = +row[55];
			this.PlayExpEffect = +row[56];
			this.NpcMatchBoss = +row[57];
			this.NoHpVisible= row[58] == "1" ? true : false;

			return this.ID;
		}

	}
}
