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
    var SayHelloDataHandler = (function (_super) {
        __extends(SayHelloDataHandler, _super);
        function SayHelloDataHandler() {
            return _super.call(this) || this;
        }
        SayHelloDataHandler.prototype.getCode = function () {
            return app.SetDataHandler.INSERT_STUDENT;
        };
        SayHelloDataHandler.prototype.handlerPackage = function (d) {
            _super.prototype.handlerPackage.call(this, d);
            var baseData = this.data.readObj();
            this.handComplete();
        };
        SayHelloDataHandler.prototype.send = function (params) {
            var pkg = new lxl.data.PackageOut(app.SetDataHandler.INSERT_STUDENT);
            pkg.writeArray(params.arr);
            lxl.GlobalData.getInstance().dataManager.send(pkg);
        };
        return SayHelloDataHandler;
    }(lxl.data.BaseDataHandler));
    app.SayHelloDataHandler = SayHelloDataHandler;
    __reflect(SayHelloDataHandler.prototype, "app.SayHelloDataHandler");
})(app || (app = {}));
//# sourceMappingURL=SayHelloDataHandler.js.map