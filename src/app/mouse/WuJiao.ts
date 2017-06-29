module app {
	export class WuJiao extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "WuJiaoSkin.exml");
		}

		private ai0:AbilityItem;
		private ai1:AbilityItem;
		private ai2:AbilityItem;
		private ai3:AbilityItem;
		private lab_a0:eui.Label;
		private lab_a1:eui.Label;
		private lab_a2:eui.Label;
		private lab_a3:eui.Label;
		private lab_a4:eui.Label;
		private wjv:WuJiaoView;

		onActivity() {
			super.onActivity();
		}

		updateView() {
			for(let i = 0; i < 4; i++) {
				this["ai" + i].updateView(Gra.curName, i, Gra.curId);
			}
			for(let i = 0; i < Gra.ablities.length; i++) {
				this["lab_a" + i].text = Gra.ablities[i];
			}
			this.wjv.updateView();
		}

		dispose() {
			super.dispose();
		}
	}
}