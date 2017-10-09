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
            Gra.getAllQuestion();
        };
        MainView.prototype._saveHandler = function (e) {
            var rt = new egret.RenderTexture();
            rt.drawToTexture(this.group, new egret.Rectangle(0, 0, this.group.width, this.group.height));
            rt.saveToFile("image/png", Gra.curStudent.index + "_" + Gra.curName + "_" + Gra.curId + ".png", new egret.Rectangle(0, 0, this.group.width, this.group.height));
        };
        MainView.prototype.checkData = function () {
            if (this.lab_grade.text == "1" || this.lab_grade.text == "2" || this.lab_grade.text == "3" || this.lab_grade.text == "4" || this.lab_grade.text == "5" || this.lab_grade.text == "6") {
                return true;
            }
            else {
                alert("请输入阿拉伯数字1-6");
            }
            return false;
        };
        MainView.prototype._submitHandler = function (e) {
            if (this.checkData() == false)
                return;
            Gra.curName = this.lab_name.text;
            Gra.curGrade = parseInt(this.lab_grade.text);
            Gra.curId = this.lab_id.text;
            Gra.curStudent = Gra.getStudent(Gra.curName, Gra.curGrade, Gra.curId);
            if (Gra.curStudent == undefined) {
                alert("请输入正确的查询信息");
                return;
            }
            var s = "";
            switch (Gra.curGrade) {
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
        };
        MainView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.btn_submit.removeEventListener(lxl.CEvent.CLICK, this._submitHandler, this);
            this.btn_save.removeEventListener(lxl.CEvent.CLICK, this._saveHandler, this);
        };
        return MainView;
    }(lxl.CComponent));
    app.MainView = MainView;
    __reflect(MainView.prototype, "app.MainView");
})(app || (app = {}));
//# sourceMappingURL=MainView.js.map