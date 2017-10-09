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
    var EvaView = (function (_super) {
        __extends(EvaView, _super);
        function EvaView() {
            return _super.call(this, lxl.Config.SKIN_PATH + "EvaSkin.exml") || this;
        }
        EvaView.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        EvaView.prototype.updateView = function () {
            for (var i = 0; i < Gra.ablities.length; i++) {
                this["lab_a" + i].text = Gra.ablities[i];
                var baseStr = Gra.getEvaByAbility(Gra.ablities[i], Gra.getCountByAblityName(Gra.curName, Gra.ablities[i], Gra.curId), Gra.getTotalCountByAblityName(Gra.ablities[i]));
                var arr = baseStr.split("$");
                this["lab_eva" + i].textFlow = [
                    { text: arr[0], style: { "textColor": 0x000000, "size": 23 } },
                    { text: arr[1], style: { "textColor": 0x000000, "size": 23, "bold": true } },
                    { text: arr[2], style: { "textColor": 0x000000, "size": 23 } }
                ];
            }
        };
        EvaView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return EvaView;
    }(lxl.CComponent));
    app.EvaView = EvaView;
    __reflect(EvaView.prototype, "app.EvaView");
})(app || (app = {}));
//# sourceMappingURL=EvaView.js.map