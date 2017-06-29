module app {
	export class TypeItem extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "TypeItemSkin.exml");
		}

		private lab_head:eui.Label;
		private lab_easy:eui.Label;
		private lab_normal:eui.Label;
		private lab_hard:eui.Label;
		private lab_total:eui.Label;

		onActivity() {
			super.onActivity();
		}

		updateView(index:number) {
			switch(index) {
				case 0:
					this.lab_head.text = "满分";
					let t1 = Gra.getTotalScoreByQuestionType("易");
					let t2 = Gra.getTotalScoreByQuestionType("中");
					let t3 = Gra.getTotalScoreByQuestionType("难");
					this.lab_easy.text = t1.toString();
					this.lab_normal.text = t2.toString();
					this.lab_hard.text = t3.toString();
					this.lab_total.text = (t1 + t2 + t3).toString();
				break;
				case 1:
					this.lab_head.text = "得分";
					let t4 = Gra.getScoreByQuestionType(Gra.curName, "易", Gra.curId);
					let t5 = Gra.getScoreByQuestionType(Gra.curName, "中", Gra.curId);
					let t6 = Gra.getScoreByQuestionType(Gra.curName, "难", Gra.curId);
					this.lab_easy.text = t4.toString();
					this.lab_normal.text = t5.toString();
					this.lab_hard.text = t6.toString();
					this.lab_total.text = (t4 + t5 + t6).toString();
				break;
				case 2:
					this.lab_head.text = "成就度";
					let tt1 = Gra.getTotalScoreByQuestionType("易");
					let tt2 = Gra.getTotalScoreByQuestionType("中");
					let tt3 = Gra.getTotalScoreByQuestionType("难");
					let tt4 = Gra.getScoreByQuestionType(Gra.curName, "易", Gra.curId);
					let tt5 = Gra.getScoreByQuestionType(Gra.curName, "中", Gra.curId);
					let tt6 = Gra.getScoreByQuestionType(Gra.curName, "难", Gra.curId);
					this.lab_easy.text = Gra.getTitleByScore(tt4, tt1);
					this.lab_normal.text = Gra.getTitleByScore(tt5, tt2);
					this.lab_hard.text = Gra.getTitleByScore(tt6, tt3);
					this.lab_total.text = Gra.getTitleByScore((tt4 + tt5 + tt6), (tt1 + tt2 + tt3));
				break;
				case 3:
					this.lab_head.text = "平均分";
					let t7 = Gra.getAveScoreByQuestionType("易");
					let t8 = Gra.getAveScoreByQuestionType("中");
					let t9 = Gra.getAveScoreByQuestionType("难");
					this.lab_easy.text = t7.toString();
					this.lab_normal.text = t8.toString();
					this.lab_hard.text = t9.toString();
					this.lab_total.text = (t7 + t8 + t9).toString();
				break;
			}
		}

		dispose() {
			super.dispose();
		}
	}
}