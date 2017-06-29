module app {
	export class Info extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "InfoSkin.exml");
		}

		private lab_name:eui.Label;
		private lab_grade:eui.Label;

		onActivity() {
			super.onActivity();
		}

		updateView() {
			this.lab_name.text = Gra.curName;
			let s = "";
			switch(Gra.curGrade) {
				case 1:
				s = "一年级";
				break;
				case 2:
				s = "两年级";
				break;
				case 3:
				s = "三年级";
				break;
				case 4:
				s = "四年级";
				break;
				case 5:
				s = "五年级";
				break;
				case 6:
				s = "六年级";
				break;
			}
			this.lab_grade.text = s;
		}

		dispose() {
			super.dispose();
		}
	}
}