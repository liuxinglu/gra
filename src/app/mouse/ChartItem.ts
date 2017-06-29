module app {
	export class ChartItem extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "ChartItemSkin.exml");
		}

		private rect_full:eui.Rect;
		private rect_ave:eui.Rect;
		private rect_my:eui.Rect;

		onActivity() {
			super.onActivity();
			this.rect_my.height = 1;
			this.rect_ave.height = 1;
			this.rect_full.height = 1;
		}

		updateView(name:string, type:string, id:string) {
			if(type != "总分") {
				this.rect_full.height = (Gra.getTotalScoreByQuestionType(type) / 80) * this.height;
				this.rect_ave.height = (Gra.getAveScoreByQuestionType(type) / 80) * this.height;
				this.rect_my.height = (Gra.getScoreByQuestionType(name, type, id) / 80) * this.height;
			} else {
				let t1 = Gra.getTotalScoreByQuestionType("易");
				let t2 = Gra.getTotalScoreByQuestionType("中");
				let t3 = Gra.getTotalScoreByQuestionType("难");
				this.rect_full.height = ((t1 + t2 + t3) / 80) * this.height;
				let t7 = Gra.getAveScoreByQuestionType("易");
				let t8 = Gra.getAveScoreByQuestionType("中");
				let t9 = Gra.getAveScoreByQuestionType("难");
				this.rect_ave.height = ((t7 + t8 + t9) / 80) * this.height;
				let t4 = Gra.getScoreByQuestionType(Gra.curName, "易", Gra.curId);
				let t5 = Gra.getScoreByQuestionType(Gra.curName, "中", Gra.curId);
				let t6 = Gra.getScoreByQuestionType(Gra.curName, "难", Gra.curId);
				this.rect_my.height = ((t4 + t5 + t6) / 80) * this.height;
			}
		}

		dispose() {
			super.dispose();
		}
	}
}