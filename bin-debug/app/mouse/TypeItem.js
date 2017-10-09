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
    var TypeItem = (function (_super) {
        __extends(TypeItem, _super);
        function TypeItem() {
            return _super.call(this, lxl.Config.SKIN_PATH + "TypeItemSkin.exml") || this;
        }
        TypeItem.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        TypeItem.prototype.updateView = function (index) {
            switch (index) {
                case 0:
                    this.lab_head.text = "满分";
                    var t1 = Gra.getTotalScoreByQuestionType("易");
                    var t2 = Gra.getTotalScoreByQuestionType("中");
                    var t3 = Gra.getTotalScoreByQuestionType("难");
                    this.lab_easy.text = t1.toString();
                    this.lab_normal.text = t2.toString();
                    this.lab_hard.text = t3.toString();
                    this.lab_total.text = (t1 + t2 + t3).toString();
                    break;
                case 1:
                    this.lab_head.text = "得分";
                    var t4 = Gra.getScoreByQuestionType(Gra.curName, "易", Gra.curId);
                    var t5 = Gra.getScoreByQuestionType(Gra.curName, "中", Gra.curId);
                    var t6 = Gra.getScoreByQuestionType(Gra.curName, "难", Gra.curId);
                    this.lab_easy.text = t4.toString();
                    this.lab_normal.text = t5.toString();
                    this.lab_hard.text = t6.toString();
                    this.lab_total.text = (t4 + t5 + t6).toString();
                    break;
                case 2:
                    this.lab_head.text = "成就度";
                    var tt1 = Gra.getTotalScoreByQuestionType("易");
                    var tt2 = Gra.getTotalScoreByQuestionType("中");
                    var tt3 = Gra.getTotalScoreByQuestionType("难");
                    var tt4 = Gra.getScoreByQuestionType(Gra.curName, "易", Gra.curId);
                    var tt5 = Gra.getScoreByQuestionType(Gra.curName, "中", Gra.curId);
                    var tt6 = Gra.getScoreByQuestionType(Gra.curName, "难", Gra.curId);
                    this.lab_easy.text = Gra.getTitleByScore(tt4, tt1);
                    this.lab_normal.text = Gra.getTitleByScore(tt5, tt2);
                    this.lab_hard.text = Gra.getTitleByScore(tt6, tt3);
                    this.lab_total.text = Gra.getTitleByScore((tt4 + tt5 + tt6), (tt1 + tt2 + tt3));
                    break;
                case 3:
                    this.lab_head.text = "平均分";
                    var t7 = Gra.getAveScoreByQuestionType("易");
                    var t8 = Gra.getAveScoreByQuestionType("中");
                    var t9 = Gra.getAveScoreByQuestionType("难");
                    this.lab_easy.text = t7.toString();
                    this.lab_normal.text = t8.toString();
                    this.lab_hard.text = t9.toString();
                    this.lab_total.text = (t7 + t8 + t9).toString();
                    break;
            }
        };
        TypeItem.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return TypeItem;
    }(lxl.CComponent));
    app.TypeItem = TypeItem;
    __reflect(TypeItem.prototype, "app.TypeItem");
})(app || (app = {}));
//# sourceMappingURL=TypeItem.js.map