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
    var Info = (function (_super) {
        __extends(Info, _super);
        function Info() {
            return _super.call(this, lxl.Config.SKIN_PATH + "InfoSkin.exml") || this;
        }
        Info.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        Info.prototype.updateView = function () {
            this.lab_name.text = Gra.curName;
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
            this.lab_grade.text = s;
        };
        Info.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return Info;
    }(lxl.CComponent));
    app.Info = Info;
    __reflect(Info.prototype, "app.Info");
})(app || (app = {}));
//# sourceMappingURL=Info.js.map