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
    var LiuJiaoView = (function (_super) {
        __extends(LiuJiaoView, _super);
        function LiuJiaoView() {
            return _super.call(this, lxl.Config.SKIN_PATH + "LiuJiaoViewSkin.exml") || this;
        }
        LiuJiaoView.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
            this._shape = new egret.Shape();
            this.group.addChild(this._shape);
            this.drawBaseLine();
        };
        LiuJiaoView.prototype.updateView = function () {
            this._shape.graphics.clear();
            this.drawBaseLine();
            var arr = this.getEachPoint();
            lxl.GTool.drawWuJiao(this._shape.graphics, 0x02B8F7, arr[0]);
            lxl.GTool.drawWuJiao(this._shape.graphics, 0xF42C02, arr[1]);
        };
        LiuJiaoView.prototype.drawBaseLine = function () {
            this._shape.graphics.lineStyle(1, 0x333333);
            this._shape.graphics.beginFill(0x333333, 0.5);
            for (var i = 0; i < 6; i++) {
                this._shape.graphics.moveTo(this.r_c.x, this.r_c.y);
                this._shape.graphics.lineTo(this["r_" + i].x, this["r_" + i].y);
            }
            this._shape.graphics.endFill();
        };
        LiuJiaoView.prototype.getEachPoint = function () {
            this.p_c = new egret.Point(this.r_c.x, this.r_c.y);
            var kArr = [];
            for (var i = 0; i < 6; i++) {
                this["p_" + i] = new egret.Point(this["r_" + i].x, this["r_" + i].y);
                this["l" + i] = egret.Point.distance(this.p_c, this["p_" + i]);
                kArr.push(lxl.GTool.getKBFromTwoPoint(this.p_c, this["p_" + i]));
            }
            var arr = [];
            for (var i = 0; i < Gra.knowledges.length; i++) {
                var s = [];
                s.push(Gra.getTotalCountByKnowledge(Gra.knowledges[i]));
                s.push(Gra.getAveCountByKnowledge(Gra.knowledges[i]));
                s.push(Gra.getCountByKnowledge(Gra.curName, Gra.knowledges[i], Gra.curId));
                arr.push(s);
                this["lab_" + i].text = Gra.knowledges[i];
            }
            var scorepArr = [];
            var avepArr = [];
            var px = 0;
            var py = 0;
            if (arr.length < 6)
                return [[], []];
            for (var i = 0; i < 6; i++) {
                this["unit" + i] = this["l" + i] / arr[i][0]; //单元值
                if (i < 3) {
                    this["al" + i] = this["unit" + i] * arr[i][1]; //平均值
                    this["rl" + i] = this["unit" + i] * arr[i][2]; //个人值
                    px = this.p_c.x + (Math.abs(this["p_" + i].x - this.p_c.x) * (this["rl" + i] / this["l" + i]));
                }
                else {
                    this["al" + i] = this["l" + i] - this["unit" + i] * arr[i][1]; //平均值
                    this["rl" + i] = this["l" + i] - this["unit" + i] * arr[i][2]; //个人值
                    px = this["p_" + i].x + (Math.abs(this.p_c.x - this["p_" + i].x) * (this["rl" + i] / this["l" + i]));
                }
                py = kArr[i][0] * px + kArr[i][1];
                var p = new egret.Point(px, py);
                scorepArr.push(p);
                if (i < 3)
                    px = this.p_c.x + (Math.abs(this["p_" + i].x - this.p_c.x) * (this["al" + i] / this["l" + i]));
                else
                    px = this["p_" + i].x + (Math.abs(this.p_c.x - this["p_" + i].x) * (this["al" + i] / this["l" + i]));
                py = kArr[i][0] * px + kArr[i][1];
                var p2 = new egret.Point(px, py);
                avepArr.push(p2);
            }
            return [avepArr, scorepArr];
        };
        LiuJiaoView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return LiuJiaoView;
    }(lxl.CComponent));
    app.LiuJiaoView = LiuJiaoView;
    __reflect(LiuJiaoView.prototype, "app.LiuJiaoView");
})(app || (app = {}));
//# sourceMappingURL=LiuJiaoView.js.map