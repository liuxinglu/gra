module app {
	export class DlgSub extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "DlgSubSkin.exml");
		}

		private btn_close:lxl.ui.CButton;
		private lab:eui.Label;
		private _sound:egret.Sound;
		private _soundC:egret.SoundChannel;
		private btn_play:lxl.ui.CButton;
		private _obj:any;
		private _flag:boolean = false;
		private _tf:egret.TextField;
		onActivity() {
			super.onActivity();
			this.btn_close.addEventListener(lxl.CEvent.CLICK, this._btnCloseHandler, this);
			// this.btn_play.addEventListener(lxl.CEvent.CLICK, this._playHandler, this);
			this._obj = app.Config.qaArr[app.Config.curSelIndex];
			this.lab.text = this._obj.answer;
			lxl.Tool.callJS("playMusic", this._obj.m);
			// this._flag = !this._flag;
			// this._tf = new egret.TextField();
			// this._tf.y = this.btn_play.y;
			// this._tf.x = this.btn_play.x;
			this.btn_play.visible = false;
			// this._tf.textAlign = egret.HorizontalAlign.CENTER;
			// this._tf.textFlow = new Array<egret.ITextElement>(
			// 	{text:"播放", style:{"href":"event:window.playMusic1()", "textColor":0x336699}}
			// );
			// this._tf.touchEnabled = true;
			// this.addChild(this._tf);
			// this._tf.addEventListener(egret.TextEvent.LINK, function (e:egret.TextEvent) {
			// 	this["playMusic1"]();
			// }, window);
			// let ft = document.createElement("font");
			// ft.color = "#336699";
			// ft.textContent = "asdfaaf";
			// ft.onclick = window["playMusic1()"];
			// Res.getResByUrl(lxl.Config.SOUND_PATH + this.getmName(app.Config.curSelIndex + 1) + ".mp3", this._mHandler, this,  egret.URLLoaderDataFormat.SOUND);
		}

		// private getmName(index:number):string {
		// 	if(index < 10) {
		// 		return "00" + index;
		// 	} else if(index < 100){
		// 		return "0" + index;
		// 	}
		// }

		// private _mHandler(e:egret.Event) {
		// 	this._sound = e.target.data;
		// 	this._soundC = this._sound.play(0, 1);
		// 	this._soundC.volume = 1;
		// }

		// private _playHandler(e:lxl.CEvent) {
		// 	if(this._flag == true) {
		// 		lxl.Tool.callJS("playMusic", this._obj.m);
		// 		// this._soundC.stop();
		// 	}
		// 	else {
		// 		lxl.Tool.callJS("stopMusic");
		// 		// this._sound.play(0, 1);
		// 	}
		// 	this._flag = !this._flag;
		// }

		private _btnCloseHandler(e:lxl.CEvent) {
			this.dispatchEvent(new lxl.CEvent(lxl.CEvent.CLOSE));
			this.dispose();
		}

		dispose() {
			super.dispose();
			this.btn_close.removeEventListener(lxl.CEvent.CLICK, this._btnCloseHandler, this);
			lxl.Tool.callJS("stopMusic");
			// this._soundC.stop();
		}
	}
}