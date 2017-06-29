module app {
	export class Chart extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "ChartSkin.exml");
		}

		private chart_easy:ChartItem;
		private chart_normal:ChartItem;
		private chart_hard:ChartItem;
		private chart_total:ChartItem;
		private type_0:TypeItem;
		private type_1:TypeItem;
		private type_2:TypeItem;
		private type_3:TypeItem;

		onActivity() {
			super.onActivity();
		}

		updateView() {
			this.chart_easy.updateView(Gra.curName, "易", Gra.curId);
			this.chart_normal.updateView(Gra.curName, "中", Gra.curId);
			this.chart_hard.updateView(Gra.curName, "难", Gra.curId);
			this.chart_total.updateView(Gra.curName, "总分", Gra.curId);
			for(let i = 0; i < 4; i++)
				this["type_" + i].updateView(i);
		}

		dispose() {
			super.dispose();
		}
	}
}