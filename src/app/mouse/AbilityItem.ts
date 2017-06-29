module app {
	export class AbilityItem extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "AbilityItemSkin.exml");
		}

		private lab_head:eui.Label;
		private lab_0:eui.Label;
		private lab_1:eui.Label;
		private lab_2:eui.Label;
		private lab_3:eui.Label;
		private lab_4:eui.Label;

		onActivity() {
			super.onActivity();
		}

		updateView(n:string, index:number, id:string) {
			
			switch(index) {
				case 0:
					this.lab_head.text = "满分";
					for(let i = 0; i < Gra.ablities.length; i++) {
						this["lab_" + i].text = (Gra.getTotalCountByAblityName(Gra.ablities[i]) * 2.5).toString();
					}
				break;
				case 1:
					this.lab_head.text = "得分";
					for(let i = 0; i < Gra.ablities.length; i++) {
						this["lab_" + i].text = (Gra.getCountByAblityName(n, Gra.ablities[i], id) * 2.5).toString();
					}
				break;
				case 2:
					this.lab_head.text = "成就度";
					for(let i = 0; i < Gra.ablities.length; i++) {
						this["lab_" + i].text = Gra.getTitleByScore(Gra.getCountByAblityName(n, Gra.ablities[i], id), Gra.getTotalCountByAblityName(Gra.ablities[i]));
					}
				break;
				case 3:
					this.lab_head.text = "平均分";
					for(let i = 0; i < Gra.ablities.length; i++) {
						this["lab_" + i].text = (Gra.getAveCountByAbilityName(Gra.ablities[i]) * 2.5).toString();
					}
				break;
			}
		}

		dispose() {
			super.dispose();
		}
	}
}