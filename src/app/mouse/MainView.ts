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
		private radio_ren:eui.RadioButton;
		private radio_hu:eui.RadioButton;

		onActivity() {
			super.onActivity();
			this.btn_submit.addEventListener(lxl.CEvent.CLICK, this._submitHandler, this);
			this.btn_save.addEventListener(lxl.CEvent.CLICK, this._saveHandler, this);
			this.radio_hu.addEventListener(egret.TouchEvent.TOUCH_TAP, this._huHandler, this);
			this.radio_ren.addEventListener(egret.TouchEvent.TOUCH_TAP, this._renHandler, this);
			
		}

		private _saveHandler(e:lxl.CEvent) {
			let rt:egret.RenderTexture = new egret.RenderTexture();
			rt.drawToTexture(this.group, new egret.Rectangle(0, 0, this.group.width, this.group.height));
			rt.saveToFile("image/png", Gra.curStudent.index + "_" + Gra.curName + "_" + Gra.curId + ".png", new egret.Rectangle(0, 0, this.group.width, this.group.height));
		}

		private checkData():boolean {
			if(this.lab_grade.text == "7" || this.lab_grade.text == "3" || this.lab_grade.text == "4" || this.lab_grade.text == "5" || this.lab_grade.text == "6") {
				return true;
			} else {
				alert("请输入阿拉伯数字3-7");
			}

			return false;
		}

		private _huHandler(e:egret.TouchEvent) {
			if(this.radio_hu.selected == true) {
				alert("当前试卷版本为沪教版，请确认是否参与过该考试");
				Gra.curVersion = "hu";
			}
		}

		private _renHandler(e:egret.TouchEvent) {
			if(this.radio_ren.selected == true) {
				alert("当前试卷版本为人教版，请确认是否参与过该考试");
				Gra.curVersion = "ren";
			}
		}

		private _submitHandler(e:lxl.CEvent) {
			if(this.checkData() == false)
				return;
			Gra.getAllQuestion(Gra.curVersion);
			this.btn_submit.label = "正在查询.."
			this.btn_submit.enabled = false;
			setTimeout(function(arg) {
				arg.btn_submit.label = "查询";
				arg.btn_submit.enabled = true;
				Gra.curName = arg.lab_name.text;
				Gra.curGrade = parseInt(arg.lab_grade.text) - 2;
				Gra.curId = arg.lab_id.text;
				Gra.curStudent = Gra.getStudent(Gra.curName, Gra.curGrade, Gra.curId);
				if(Gra.curStudent == undefined){
					alert("请输入正确的查询信息");
					return;
				}
				let s = "";
				switch(Gra.curGrade) {
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
					case 7:
					s = "七年级";
					break;
				}
				arg.lab_title.text = s + "下vipjr学员分析测评报告";
				Gra.leidaData();
				arg.info.updateView();
				arg.chart.updateView();
				arg.liujiao.updateView();
				arg.wujiao.updateView();
				arg.eva.updateView();
			}, 2000, this);
		}

		dispose() {
			super.dispose();
			this.btn_submit.removeEventListener(lxl.CEvent.CLICK, this._submitHandler, this);
			this.btn_save.removeEventListener(lxl.CEvent.CLICK, this._saveHandler, this);
			this.radio_hu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._huHandler, this);
			this.radio_ren.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._renHandler, this);
		}
	}
}