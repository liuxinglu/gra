module app {
	export class EvaView extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "EvaSkin.exml");
		}

		private lab_a0:eui.Label;
		private lab_eva0:eui.Label;
		private lab_a1:eui.Label;
		private lab_eva1:eui.Label;
		private lab_a2:eui.Label;
		private lab_eva2:eui.Label;
		private lab_a3:eui.Label;
		private lab_eva3:eui.Label;
		private lab_a4:eui.Label;
		private lab_eva4:eui.Label;

		onActivity() {
			super.onActivity();
		}

		updateView() {
			for(let i = 0; i < Gra.ablities.length; i++) {
				this["lab_a" + i].text = Gra.ablities[i];
				let baseStr = Gra.getEvaByAbility(Gra.ablities[i], Gra.getCountByAblityName(Gra.curName, Gra.ablities[i], Gra.curId), Gra.getTotalCountByAblityName(Gra.ablities[i]));
				let arr = baseStr.split("$");
				this["lab_eva" + i].textFlow = <Array<egret.ITextElement>>[
					{text:arr[0], style:{"textColor":0x000000, "size":23}},
					{text:arr[1], style:{"textColor":0x000000, "size":23, "bold":true}},
					{text:arr[2], style:{"textColor":0x000000, "size":23}}
				];
			}
		}

		dispose() {
			super.dispose();
		}
	}
}