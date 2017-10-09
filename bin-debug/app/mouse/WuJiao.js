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
    var WuJiao = (function (_super) {
        __extends(WuJiao, _super);
        function WuJiao() {
            return _super.call(this, lxl.Config.SKIN_PATH + "WuJiaoSkin.exml") || this;
        }
        WuJiao.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        WuJiao.prototype.updateView = function () {
            for (var i = 0; i < 4; i++) {
                this["ai" + i].updateView(Gra.curName, i, Gra.curId);
            }
            for (var i = 0; i < Gra.ablities.length; i++) {
                this["lab_a" + i].text = Gra.ablities[i];
            }
            this.wjv.updateView();
        };
        WuJiao.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return WuJiao;
    }(lxl.CComponent));
    app.WuJiao = WuJiao;
    __reflect(WuJiao.prototype, "app.WuJiao");
})(app || (app = {}));
//# sourceMappingURL=WuJiao.js.map