var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var app;
(function (app) {
    var Eva = (function () {
        function Eva() {
        }
        return Eva;
    }());
    app.Eva = Eva;
    __reflect(Eva.prototype, "app.Eva");
})(app || (app = {}));
//# sourceMappingURL=Eva.js.map