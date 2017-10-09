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
    var QuestionView = (function (_super) {
        __extends(QuestionView, _super);
        function QuestionView() {
            return _super.call(this, lxl.Config.SKIN_PATH + "QuestionSkin.exml") || this;
        }
        QuestionView.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
        };
        QuestionView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return QuestionView;
    }(lxl.CComponent));
    app.QuestionView = QuestionView;
    __reflect(QuestionView.prototype, "app.QuestionView");
})(app || (app = {}));
//# sourceMappingURL=QuestionView.js.map