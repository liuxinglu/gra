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
    var AbilityItem = (function (_super) {
        __extends(AbilityItem, _super);
        function AbilityItem() {
            return _super.call(this, lxl.Config.SKIN_PATH + "AbilityItemSkin.exml") || this;
        }
        AbilityItem.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        AbilityItem.prototype.updateView = function (n, index, id) {
            switch (index) {
                case 0:
                    this.lab_head.text = "满分";
                    for (var i = 0; i < Gra.ablities.length; i++) {
                        this["lab_" + i].text = (Gra.getTotalCountByAblityName(Gra.ablities[i]) * 2.5).toString();
                    }
                    break;
                case 1:
                    this.lab_head.text = "得分";
                    for (var i = 0; i < Gra.ablities.length; i++) {
                        this["lab_" + i].text = (Gra.getCountByAblityName(n, Gra.ablities[i], id) * 2.5).toString();
                    }
                    break;
                case 2:
                    this.lab_head.text = "成就度";
                    for (var i = 0; i < Gra.ablities.length; i++) {
                        this["lab_" + i].text = Gra.getTitleByScore(Gra.getCountByAblityName(n, Gra.ablities[i], id), Gra.getTotalCountByAblityName(Gra.ablities[i]));
                    }
                    break;
                case 3:
                    this.lab_head.text = "平均分";
                    for (var i = 0; i < Gra.ablities.length; i++) {
                        this["lab_" + i].text = (Gra.getAveCountByAbilityName(Gra.ablities[i]) * 2.5).toString();
                    }
                    break;
            }
        };
        AbilityItem.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return AbilityItem;
    }(lxl.CComponent));
    app.AbilityItem = AbilityItem;
    __reflect(AbilityItem.prototype, "app.AbilityItem");
})(app || (app = {}));
//# sourceMappingURL=AbilityItem.js.map