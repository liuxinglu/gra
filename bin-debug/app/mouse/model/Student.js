var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var app;
(function (app) {
    var Student = (function () {
        function Student() {
            this.questionArr = []; //题目列表
            this.name = ""; //考生姓名
            this.id = ""; //身份ID
            this.score = 0; //分数
            this.ipAddress = ""; //ip地址
            this.os = ""; //操作系统
            this.phone = ""; //手机号码
            this.index = 0; //索引
        }
        return Student;
    }());
    app.Student = Student;
    __reflect(Student.prototype, "app.Student");
})(app || (app = {}));
//# sourceMappingURL=Student.js.map