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
    var LiuJiao = (function (_super) {
        __extends(LiuJiao, _super);
        function LiuJiao() {
            return _super.call(this, lxl.Config.SKIN_PATH + "LiuJiaoSkin.exml") || this;
        }
        LiuJiao.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        LiuJiao.prototype.updateView = function () {
            for (var i = 0; i < 4; i++) {
                this["kItem" + i].updateView(Gra.curName, i, Gra.curId);
            }
            for (var i = 0; i < Gra.knowledges.length; i++) {
                this["lab_k" + i].text = Gra.knowledges[i];
            }
            this.ljv.updateView();
        };
        LiuJiao.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return LiuJiao;
    }(lxl.CComponent));
    app.LiuJiao = LiuJiao;
    __reflect(LiuJiao.prototype, "app.LiuJiao");
})(app || (app = {}));
//# sourceMappingURL=LiuJiao.js.map