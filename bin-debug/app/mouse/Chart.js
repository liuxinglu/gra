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
    var Chart = (function (_super) {
        __extends(Chart, _super);
        function Chart() {
            return _super.call(this, lxl.Config.SKIN_PATH + "ChartSkin.exml") || this;
        }
        Chart.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        Chart.prototype.updateView = function () {
            this.chart_easy.updateView(Gra.curName, "易", Gra.curId);
            this.chart_normal.updateView(Gra.curName, "中", Gra.curId);
            this.chart_hard.updateView(Gra.curName, "难", Gra.curId);
            this.chart_total.updateView(Gra.curName, "总分", Gra.curId);
            for (var i = 0; i < 4; i++)
                this["type_" + i].updateView(i);
        };
        Chart.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return Chart;
    }(lxl.CComponent));
    app.Chart = Chart;
    __reflect(Chart.prototype, "app.Chart");
})(app || (app = {}));
//# sourceMappingURL=Chart.js.map