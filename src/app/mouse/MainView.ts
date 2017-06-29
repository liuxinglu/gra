module app {
	export class MainView extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "MainViewSkin.exml");
		}

		private lab_name:eui.Label;
		private lab_grade:eui.Label;
		private lab_id:eui.Label;
		private btn_submit:lxl.ui.CButton;
		private btn_save:lxl.ui.CButton;
		private group:eui.Group;
		private lab_title:eui.Label;
		private info:Info;
		private chart:Chart;
		private liujiao:LiuJiao;
		private wujiao:WuJiao;
		private eva:EvaView;
		
		onActivity() {
			super.onActivity();
			this.btn_submit.addEventListener(lxl.CEvent.CLICK, this._submitHandler, this);
			this.btn_save.addEventListener(lxl.CEvent.CLICK, this._saveHandler, this);
			Gra.getAllQuestion();
		}

		private _saveHandler(e:lxl.CEvent) {
			let rt:egret.RenderTexture = new egret.RenderTexture();
			rt.drawToTexture(this.group, new egret.Rectangle(0, 0, this.group.width, this.group.height));
			rt.saveToFile("image/png", Gra.curStudent.index + "_" + Gra.curName + "_" + Gra.curId + ".png", new egret.Rectangle(0, 0, this.group.width, this.group.height));
		}

		private checkData():boolean {
			if(this.lab_grade.text == "1" || this.lab_grade.text == "2" || this.lab_grade.text == "3" || this.lab_grade.text == "4" || this.lab_grade.text == "5" || this.lab_grade.text == "6") {
				return true;
			} else {
				alert("请输入阿拉伯数字1-6");
			}

			return false;
		}

		private _submitHandler(e:lxl.CEvent) {
			if(this.checkData() == false)
				return;
			Gra.curName = this.lab_name.text;
			Gra.curGrade = parseInt(this.lab_grade.text);
			Gra.curId = this.lab_id.text;
			Gra.curStudent = Gra.getStudent(Gra.curName, Gra.curGrade, Gra.curId);
			if(Gra.curStudent == undefined){
				alert("请输入正确的查询信息");
				return;
			}
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
			this.lab_title.text = s + "下vipjr学员分析测评报告";
			Gra.leidaData();
			this.info.updateView();
			this.chart.updateView();
			this.liujiao.updateView();
			this.wujiao.updateView();
			this.eva.updateView();
		}

		dispose() {
			super.dispose();
			this.btn_submit.removeEventListener(lxl.CEvent.CLICK, this._submitHandler, this);
			this.btn_save.removeEventListener(lxl.CEvent.CLICK, this._saveHandler, this);
		}
	}
}