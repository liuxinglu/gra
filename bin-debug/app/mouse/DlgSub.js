var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var DlgSub = (function (_super) {
        __extends(DlgSub, _super);
        function DlgSub() {
            var _this = _super.call(this, lxl.Config.SKIN_PATH + "DlgSubSkin.exml") || this;
            _this._flag = false;
            return _this;
        }
        DlgSub.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
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
        };
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
        DlgSub.prototype._btnCloseHandler = function (e) {
            this.dispatchEvent(new lxl.CEvent(lxl.CEvent.CLOSE));
            this.dispose();
        };
        DlgSub.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.btn_close.removeEventListener(lxl.CEvent.CLICK, this._btnCloseHandler, this);
            lxl.Tool.callJS("stopMusic");
            // this._soundC.stop();
        };
        return DlgSub;
    }(lxl.CComponent));
    app.DlgSub = DlgSub;
    __reflect(DlgSub.prototype, "app.DlgSub");
})(app || (app = {}));
//# sourceMappingURL=DlgSub.js.map