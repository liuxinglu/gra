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
    var ChartItem = (function (_super) {
        __extends(ChartItem, _super);
        function ChartItem() {
            return _super.call(this, lxl.Config.SKIN_PATH + "ChartItemSkin.exml") || this;
        }
        ChartItem.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
            this.rect_my.height = 1;
            this.rect_ave.height = 1;
            this.rect_full.height = 1;
        };
        ChartItem.prototype.updateView = function (name, type, id) {
            if (type != "总分") {
                this.rect_full.height = (Gra.getTotalScoreByQuestionType(type) / 80) * this.height;
                this.rect_ave.height = (Gra.getAveScoreByQuestionType(type) / 80) * this.height;
                this.rect_my.height = (Gra.getScoreByQuestionType(name, type, id) / 80) * this.height;
            }
            else {
                var t1 = Gra.getTotalScoreByQuestionType("易");
                var t2 = Gra.getTotalScoreByQuestionType("中");
                var t3 = Gra.getTotalScoreByQuestionType("难");
                this.rect_full.height = ((t1 + t2 + t3) / 80) * this.height;
                var t7 = Gra.getAveScoreByQuestionType("易");
                var t8 = Gra.getAveScoreByQuestionType("中");
                var t9 = Gra.getAveScoreByQuestionType("难");
                this.rect_ave.height = ((t7 + t8 + t9) / 80) * this.height;
                var t4 = Gra.getScoreByQuestionType(Gra.curName, "易", Gra.curId);
                var t5 = Gra.getScoreByQuestionType(Gra.curName, "中", Gra.curId);
                var t6 = Gra.getScoreByQuestionType(Gra.curName, "难", Gra.curId);
                this.rect_my.height = ((t4 + t5 + t6) / 80) * this.height;
            }
        };
        ChartItem.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return ChartItem;
    }(lxl.CComponent));
    app.ChartItem = ChartItem;
    __reflect(ChartItem.prototype, "app.ChartItem");
})(app || (app = {}));
//# sourceMappingURL=ChartItem.js.map