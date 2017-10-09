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
    var KnowledgeItem = (function (_super) {
        __extends(KnowledgeItem, _super);
        function KnowledgeItem() {
            return _super.call(this, lxl.Config.SKIN_PATH + "KnowledgeItemSkin.exml") || this;
        }
        KnowledgeItem.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        KnowledgeItem.prototype.updateView = function (n, index, id) {
            switch (index) {
                case 0:
                    this.lab_head.text = "满分";
                    for (var i = 0; i < Gra.knowledges.length; i++) {
                        this["lab_" + i].text = (Gra.getTotalCountByKnowledge(Gra.knowledges[i]) * 5).toString();
                    }
                    break;
                case 1:
                    this.lab_head.text = "得分";
                    for (var i = 0; i < Gra.knowledges.length; i++) {
                        this["lab_" + i].text = (Gra.getCountByKnowledge(n, Gra.knowledges[i], id) * 5).toString();
                    }
                    break;
                case 2:
                    this.lab_head.text = "成就度";
                    for (var i = 0; i < Gra.knowledges.length; i++) {
                        this["lab_" + i].text = Gra.getTitleByScore(Gra.getCountByKnowledge(n, Gra.knowledges[i], id), Gra.getTotalCountByKnowledge(Gra.knowledges[i]));
                    }
                    break;
                case 3:
                    this.lab_head.text = "平均分";
                    for (var i = 0; i < Gra.knowledges.length; i++) {
                        this["lab_" + i].text = (Gra.getAveCountByKnowledge(Gra.knowledges[i]) * 5).toString();
                    }
                    break;
            }
        };
        KnowledgeItem.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return KnowledgeItem;
    }(lxl.CComponent));
    app.KnowledgeItem = KnowledgeItem;
    __reflect(KnowledgeItem.prototype, "app.KnowledgeItem");
})(app || (app = {}));
//# sourceMappingURL=KnowledgeItem.js.map