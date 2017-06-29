module app {
	export class LiuJiao extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "LiuJiaoSkin.exml");
		}

		private kItem0:KnowledgeItem;
		private kItem1:KnowledgeItem;
		private kItem2:KnowledgeItem;
		private kItem3:KnowledgeItem;
		private lab_k0:eui.Label;
		private lab_k1:eui.Label;
		private lab_k2:eui.Label;
		private lab_k3:eui.Label;
		private lab_k4:eui.Label;
		private lab_k5:eui.Label;
		private ljv:LiuJiaoView;

		onActivity() {
			super.onActivity();
		}

		updateView() {
			for(let i = 0; i < 4; i++) {
				this["kItem" + i].updateView(Gra.curName, i, Gra.curId);
			}
			for(let i = 0; i < Gra.knowledges.length; i++) {
				this["lab_k" + i].text = Gra.knowledges[i];
			}
			this.ljv.updateView();
		}

		dispose() {
			super.dispose();
		}
	}
}