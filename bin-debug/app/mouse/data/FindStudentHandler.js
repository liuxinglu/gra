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
    var FindStudentHandler = (function (_super) {
        __extends(FindStudentHandler, _super);
        function FindStudentHandler() {
            return _super.call(this) || this;
        }
        FindStudentHandler.prototype.getCode = function () {
            return app.SetDataHandler.FIND_STUDENT;
        };
        FindStudentHandler.prototype.handlerPackage = function (d) {
            _super.prototype.handlerPackage.call(this, d);
            var baseData = this.data.readObj();
            var data = JSON.parse(baseData.toString());
            lxl.logs.log(data.name);
            this.handComplete();
        };
        FindStudentHandler.prototype.send = function (p) {
            var pkg = new lxl.data.PackageOut(app.SetDataHandler.FIND_STUDENT);
            pkg.writeArray(p.arr);
            lxl.GlobalData.getInstance().dataManager.send(pkg);
        };
        return FindStudentHandler;
    }(lxl.data.BaseDataHandler));
    app.FindStudentHandler = FindStudentHandler;
    __reflect(FindStudentHandler.prototype, "app.FindStudentHandler");
})(app || (app = {}));
//# sourceMappingURL=FindStudentHandler.js.map