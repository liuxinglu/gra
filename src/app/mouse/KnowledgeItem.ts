module app {
	export class KnowledgeItem extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "KnowledgeItemSkin.exml");
		}

		private lab_head:eui.Label;
		private lab_0:eui.Label;
		private lab_1:eui.Label;
		private lab_2:eui.Label;
		private lab_3:eui.Label;
		private lab_4:eui.Label;
		private lab_5:eui.Label;

		onActivity() {
			super.onActivity();
		}

		updateView(n:string, index:number, id:string) {
			
			switch(index) {
				case 0:
					this.lab_head.text = "满分";
					for(let i = 0; i < Gra.knowledges.length; i++) {
						this["lab_" + i].text = (Gra.getTotalCountByKnowledge(Gra.knowledges[i]) * 5).toString();
					}
				break;
				case 1:
					this.lab_head.text = "得分";
					for(let i = 0; i < Gra.knowledges.length; i++) {
						this["lab_" + i].text = (Gra.getCountByKnowledge(n, Gra.knowledges[i], id) * 5).toString();
					}
				break;
				case 2:
					this.lab_head.text = "成就度";
					for(let i = 0; i < Gra.knowledges.length; i++) {
						this["lab_" + i].text = Gra.getTitleByScore(Gra.getCountByKnowledge(n, Gra.knowledges[i], id), Gra.getTotalCountByKnowledge(Gra.knowledges[i]));
					}
				break;
				case 3:
					this.lab_head.text = "平均分";
					for(let i = 0; i < Gra.knowledges.length; i++) {
						this["lab_" + i].text = (Gra.getAveCountByKnowledge(Gra.knowledges[i]) * 5).toString();
					}
				break;
			}
		}

		dispose() {
			super.dispose();
		}
	}
}