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
    var MainView = (function (_super) {
        __extends(MainView, _super);
        function MainView() {
            return _super.call(this, lxl.Config.SKIN_PATH + "MainViewSkin.exml") || this;
        }
        MainView.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
            this.btn_submit.addEventListener(lxl.CEvent.CLICK, this._submitHandler, this);
            this.btn_save.addEventListener(lxl.CEvent.CLICK, this._saveHandler, this);
            this.radio_hu.addEventListener(egret.TouchEvent.TOUCH_TAP, this._huHandler, this);
            this.radio_ren.addEventListener(egret.TouchEvent.TOUCH_TAP, this._renHandler, this);
        };
        MainView.prototype._saveHandler = function (e) {
            var rt = new egret.RenderTexture();
            rt.drawToTexture(this.group, new egret.Rectangle(0, 0, this.group.width, this.group.height));
            rt.saveToFile("image/png", Gra.curStudent.index + "_" + Gra.curName + "_" + Gra.curId + ".png", new egret.Rectangle(0, 0, this.group.width, this.group.height));
        };
        MainView.prototype.checkData = function () {
            if (this.lab_grade.text == "7" || this.lab_grade.text == "3" || this.lab_grade.text == "4" || this.lab_grade.text == "5" || this.lab_grade.text == "6") {
                return true;
            }
            else {
                alert("请输入阿拉伯数字3-7");
            }
            return false;
        };
        MainView.prototype._huHandler = function (e) {
            if (this.radio_hu.selected == true) {
                alert("当前试卷版本为沪教版，请确认是否参与过该考试");
                Gra.curVersion = "hu";
            }
        };
        MainView.prototype._renHandler = function (e) {
            if (this.radio_ren.selected == true) {
                alert("当前试卷版本为人教版，请确认是否参与过该考试");
                Gra.curVersion = "ren";
            }
        };
        MainView.prototype._submitHandler = function (e) {
            if (this.checkData() == false)
                return;
            Gra.getAllQuestion(Gra.curVersion);
            this.btn_submit.label = "正在查询..";
            this.btn_submit.enabled = false;
            setTimeout(function (arg) {
                arg.btn_submit.label = "查询";
                arg.btn_submit.enabled = true;
                Gra.curName = arg.lab_name.text;
                Gra.curGrade = parseInt(arg.lab_grade.text) - 2;
                Gra.curId = arg.lab_id.text;
                Gra.curStudent = Gra.getStudent(Gra.curName, Gra.curGrade, Gra.curId);
                if (Gra.curStudent == undefined) {
                    alert("请输入正确的查询信息");
                    return;
                }
                var s = "";
                switch (Gra.curGrade) {
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
        };
        MainView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.btn_submit.removeEventListener(lxl.CEvent.CLICK, this._submitHandler, this);
            this.btn_save.removeEventListener(lxl.CEvent.CLICK, this._saveHandler, this);
            this.radio_hu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._huHandler, this);
            this.radio_ren.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._renHandler, this);
        };
        return MainView;
    }(lxl.CComponent));
    app.MainView = MainView;
    __reflect(MainView.prototype, "app.MainView");
})(app || (app = {}));
//# sourceMappingURL=MainView.js.map