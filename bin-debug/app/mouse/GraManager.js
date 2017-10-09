var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var app;
(function (app) {
    var GraManager = (function () {
        function GraManager() {
            this.studentArr = [];
            this.curGrade = 0;
            this.curGradeStudents = [];
            this.ablities = [];
            this.knowledges = [];
            this.configEva = [];
        }
        GraManager.prototype.getEvaByAbility = function (ability, score, total) {
            var temp = (score / total) * 100;
            var eva;
            for (var i = 0; i < this.configEva.length; i++) {
                if (this.configEva[i].grade == this.curGrade && this.configEva[i].knowledge == ability) {
                    eva = this.configEva[i];
                    break;
                }
            }
            if (temp >= 75) {
                return eva.eva2;
            }
            else
                return eva.eva1;
        };
        GraManager.prototype.getTitleByScore = function (score, total) {
            var temp = (score / total) * 100;
            if (temp >= 95)
                return "卓越";
            else if (temp >= 80 && temp < 95)
                return "优秀";
            else if (temp >= 70 && temp < 80)
                return "良好";
            else if (temp >= 50 && temp < 70)
                return "合格";
            else
                return "不合格";
        };
        GraManager.prototype.getRateByQuestion = function (q) {
            var count = 0;
            var s = this.getStudent("标准答案信息", this.curGrade);
            var standardArr = s.questionArr;
            for (var i = 0; i < this.curGradeStudents.length; i++) {
                var qArr = this.curGradeStudents[i].questionArr;
                for (var j = 1; j < qArr.length; j++) {
                    if (qArr[j].index == q.index && standardArr[j].answer == qArr[j].answer) {
                        count++;
                    }
                }
            }
            return Math.round((count / (this.curGradeStudents.length - 1)) * 100);
        };
        GraManager.prototype.leidaData = function () {
            var res = [];
            var json = {};
            var res1 = [];
            var json1 = {};
            for (var i = 0; i < this.curStudent.questionArr.length; i++) {
                var arr = this.curStudent.questionArr[i].ability.split(",");
                for (var j = 0; j < arr.length; j++) {
                    if (!json[arr[j]]) {
                        res.push(arr[j]);
                        json[arr[j]] = 1;
                    }
                }
                if (!json1[this.curStudent.questionArr[i].knowledge]) {
                    res1.push(this.curStudent.questionArr[i].knowledge);
                    json1[this.curStudent.questionArr[i].knowledge] = 1;
                }
            }
            this.ablities = res;
            this.knowledges = res1;
        };
        /***
         * 当前能力点下的总数
         */
        GraManager.prototype.getTotalCountByAblityName = function (ablity) {
            var count = 0;
            for (var i = 0; i < this.curStudent.questionArr.length; i++) {
                var arr = this.curStudent.questionArr[i].ability.split(",");
                for (var j = 0; j < arr.length; j++) {
                    if (arr[j] == ablity) {
                        count++;
                    }
                }
            }
            return count;
        };
        /***
         * 获得当前能力点的平均答对数
         */
        GraManager.prototype.getAveCountByAbilityName = function (ability) {
            var count = 0;
            for (var i = 0; i < this.curGradeStudents.length; i++) {
                count += this.getCountByAblityName(this.curGradeStudents[i].name, ability, this.curGradeStudents[i].id);
            }
            return Math.round(count / this.curGradeStudents.length);
        };
        /***
         * 获得当前能力点下答对情况
         */
        GraManager.prototype.getCountByAblityName = function (name, ability, id) {
            var s = this.getStudent("标准答案信息", this.curGrade);
            var standardArr = s.questionArr;
            var stuAnswerArr = this.getStudent(name, this.curGrade, id).questionArr;
            var count = 0;
            for (var i = 0; i < stuAnswerArr.length; i++) {
                var arr = stuAnswerArr[i].ability.split(",");
                for (var j = 0; j < arr.length; j++) {
                    if (arr[j] == ability && stuAnswerArr[i].answer == standardArr[i].answer) {
                        count++;
                    }
                }
            }
            return count;
        };
        /***
         * 当前知识点题目总数
         */
        GraManager.prototype.getTotalCountByKnowledge = function (k) {
            var count = 0;
            for (var i = 0; i < this.curStudent.questionArr.length; i++) {
                if (this.curStudent.questionArr[i].knowledge == k) {
                    count++;
                }
            }
            return count;
        };
        /***
         * 获得当前知识点的平均答对数
         */
        GraManager.prototype.getAveCountByKnowledge = function (k) {
            var count = 0;
            for (var i = 0; i < this.curGradeStudents.length; i++) {
                count += this.getCountByKnowledge(this.curGradeStudents[i].name, k, this.curGradeStudents[i].id);
            }
            return Math.round(count / this.curGradeStudents.length);
        };
        /***
         * 获得当前知识点答对的数量
         */
        GraManager.prototype.getCountByKnowledge = function (name, k, id) {
            var s = this.getStudent("标准答案信息", this.curGrade);
            var standardArr = s.questionArr;
            var stuAnswerArr = this.getStudent(name, this.curGrade, id).questionArr;
            var count = 0;
            for (var i = 0; i < stuAnswerArr.length; i++) {
                if (stuAnswerArr[i].knowledge == k && standardArr[i].answer == stuAnswerArr[i].answer) {
                    count++;
                }
            }
            return count;
        };
        /***
         * 当前难度下的总分
         */
        GraManager.prototype.getTotalScoreByQuestionType = function (type) {
            var score = 0;
            return this.getScoreByQuestionType("标准答案信息", type, "");
        };
        /***
         * 获得当前难度下的平均分
         */
        GraManager.prototype.getAveScoreByQuestionType = function (type) {
            var score = 0;
            for (var i = 0; i < this.curGradeStudents.length; i++) {
                score += this.getScoreByQuestionType(this.curGradeStudents[i].name, type, this.curGradeStudents[i].id);
            }
            return Math.round(score / this.curGradeStudents.length);
        };
        /***
         * 获得当前难度下得分情况
         */
        GraManager.prototype.getScoreByQuestionType = function (name, type, id) {
            var s = this.getStudent("标准答案信息", this.curGrade);
            var standardArr = s.questionArr;
            var stuAnswerArr = this.getStudent(name, this.curGrade, id).questionArr;
            var score = 0;
            for (var i = 0; i < stuAnswerArr.length; i++) {
                if (stuAnswerArr[i].type == type && stuAnswerArr[i].answer == standardArr[i].answer) {
                    score++;
                }
            }
            return score * 5;
        };
        GraManager.prototype.getStudent = function (name, grade, id) {
            if (id === void 0) { id = ""; }
            this.curGradeStudents = this.studentArr[grade - 1];
            for (var i = 0; i < this.curGradeStudents.length; i++) {
                if (this.curGradeStudents[i].name == name && this.curGradeStudents[i].id == id) {
                    return this.curGradeStudents[i];
                }
            }
        };
        GraManager.prototype.getAllQuestion = function () {
            var _this = this;
            var data;
            var data2;
            var evaData;
            var dataArr = [];
            evaData = JSON.parse(Res.getRes("eva_txt"));
            evaData.forEach(function (e) {
                var eva = new app.Eva();
                eva.grade = parseInt(e.grade);
                eva.knowledge = e.knowledge;
                eva.eva1 = e.eva1;
                eva.eva2 = e.eva2;
                _this.configEva.push(eva);
            });
            var _loop_1 = function (i) {
                data = JSON.parse(Res.getRes("q_g" + i + "_txt"));
                data2 = JSON.parse(Res.getRes("type_g" + i + "_txt"));
                var arr2 = [];
                var arr = [];
                var res = {};
                data.forEach(function (e) {
                    if (!res[e.身份ID + "_" + e.姓名]) {
                        res[e.身份ID + "_" + e.姓名] = 1;
                        var s = new app.Student();
                        if (e.身份ID)
                            s.id = e.身份ID;
                        else
                            s.id = "";
                        if (e.IP地址)
                            s.ipAddress = e.IP地址;
                        else
                            s.ipAddress = "";
                        s.name = e.姓名;
                        if (e.操作系统)
                            s.os = e.操作系统;
                        else
                            s.os = "";
                        s.score = e.测试得分;
                        if (e.手机号码)
                            s.phone = e.手机号码;
                        else
                            s.phone = "";
                        if (e.索引)
                            s.index = e.索引;
                        else
                            s.index = 0;
                        for (var j = 1; j <= 20; j++) {
                            var q = new app.Question();
                            q.index = j;
                            if (e[j.toString()])
                                q.answer = e[j.toString()];
                            else
                                q.answer = "";
                            s.questionArr.push(q);
                        }
                        arr.push(s);
                        arr2 = [];
                        data2.forEach(function (e) {
                            var q = new app.Question();
                            q.answer = arr[arr.length - 1].questionArr[parseInt(e.题号) - 1].answer;
                            q.index = e.题号;
                            q.knowledge = e.知识点;
                            q.ability = e.能力;
                            if (e.难 == "1") {
                                q.type = "难";
                            }
                            else if (e.中 == "1") {
                                q.type = "中";
                            }
                            else if (e.易 == "1") {
                                q.type = "易";
                            }
                            arr2.push(q);
                        });
                        arr2.sort();
                        arr[arr.length - 1].questionArr = arr2;
                    }
                });
                dataArr.push(arr);
            };
            for (var i = 1; i < 7; i++) {
                _loop_1(i);
            }
            this.studentArr = dataArr;
            return dataArr;
        };
        GraManager.prototype.loadMasterData = function (cb, ctx) {
            cb.call(ctx);
        };
        GraManager.getInstance = function () {
            if (this._instance == null) {
                this._instance = new GraManager();
            }
            return this._instance;
        };
        return GraManager;
    }());
    app.GraManager = GraManager;
    __reflect(GraManager.prototype, "app.GraManager");
})(app || (app = {}));
//# sourceMappingURL=GraManager.js.map