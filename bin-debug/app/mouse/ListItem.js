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
    var ListItem = (function (_super) {
        __extends(ListItem, _super);
        function ListItem() {
            return _super.call(this, lxl.Config.SKIN_PATH + "ListItemSkin.exml") || this;
        }
        ListItem.prototype.onActivity = function () {
            _super.prototype.onActivity.call(this);
            this.lab.addEventListener(egret.TouchEvent.TOUCH_TAP, this._clickHandler, this);
        };
        ListItem.prototype._clickHandler = function (e) {
            lxl.CDispatcher.getInstance().dispatch(new lxl.CEvent(lxl.CEvent.CLICK, this._index));
        };
        ListItem.prototype.setLabelText = function (str) {
            this.lab.text = str;
        };
        ListItem.prototype.setIndex = function (index) {
            this._index = index;
        };
        ListItem.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._clickHandler, this);
        };
        return ListItem;
    }(lxl.CComponent));
    app.ListItem = ListItem;
    __reflect(ListItem.prototype, "app.ListItem");
})(app || (app = {}));
//# sourceMappingURL=ListItem.js.map