var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var app;
(function (app) {
    var SetDataHandler = (function () {
        function SetDataHandler() {
            lxl.GlobalData.getInstance().dataManager.addDataHandler(new app.SayHelloDataHandler());
            lxl.GlobalData.getInstance().dataManager.addDataHandler(new app.FindStudentHandler());
        }
        SetDataHandler.setHandlers = function () {
            if (this.instance == null) {
                this.instance = new app.SetDataHandler();
            }
        };
        SetDataHandler.prototype.insertStudent = function () {
            var d = lxl.GlobalData.getInstance().dataManager.getDataHandler(SetDataHandler.INSERT_STUDENT);
            var b = new lxl.data.BaseData();
            b.arr.push(new lxl.data.Map("name", "liuxing"));
            b.arr.push(new lxl.data.Map("age", "28"));
            b.arr.push(new lxl.data.Map("sex", 1));
            d.send(b);
        };
        SetDataHandler.prototype.findStudent = function () {
            var d = lxl.GlobalData.getInstance().dataManager.getDataHandler(SetDataHandler.FIND_STUDENT);
            var b = new lxl.data.BaseData();
            b.arr.push(new lxl.data.Map("name", "liuxing"));
            d.send(b);
        };
        return SetDataHandler;
    }());
    SetDataHandler.INSERT_STUDENT = "insertStudent";
    SetDataHandler.FIND_STUDENT = "findStudent";
    app.SetDataHandler = SetDataHandler;
    __reflect(SetDataHandler.prototype, "app.SetDataHandler");
})(app || (app = {}));
//# sourceMappingURL=SetDataHandler.js.map