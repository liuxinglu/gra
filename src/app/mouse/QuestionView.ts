module app {
	export class QuestionView extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "QuestionSkin.exml");
		}

		private lab_index:eui.Label;
		private lab_fullScore:eui.Label;
		private lab_type:eui.Label;
		private lab_score:eui.Label;
		private lab_rate:eui.Label;

		onActivity() {
			super.onActivity();
			
		}



		dispose() {
			super.dispose();
		}
	}
}