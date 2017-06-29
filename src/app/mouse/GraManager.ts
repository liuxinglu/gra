module app {
	export class GraManager {
		public constructor() {
		}

		private studentArr:Array<Array<Student>> = [];
		curGrade:number = 0;
		curStudent:Student;
		curName:string;
		curId:string;
		curGradeStudents:Array<Student> = [];
		ablities:Array<string> = [];
		knowledges:Array<string> = [];
		configEva:Array<Eva> = [];

		getEvaByAbility(ability:string, score:number, total:number):string {
			let temp = (score / total) * 100;
			let eva:Eva;
			for(let i = 0; i < this.configEva.length; i++) {
				if(this.configEva[i].grade == this.curGrade && this.configEva[i].knowledge == ability) {
					eva = this.configEva[i];
					break;
				}
			}
			if(temp >= 75) {
				return eva.eva2;
			} else
				return eva.eva1;
		}

		getTitleByScore(score:number, total:number):string {
			let temp = (score / total) * 100;
			if(temp >= 95)
				return "卓越";
			else if(temp >= 80 && temp < 95)
				return "优秀";
			else if(temp >= 70 && temp < 80)
				return "良好";
			else if(temp >= 50 && temp < 70)
				return "合格";
			else
				return "不合格";
		}

		getRateByQuestion(q:Question):number {
			let count = 0;
			let s:Student = this.getStudent("标准答案信息", this.curGrade);
			let standardArr:Array<Question> = s.questionArr;
			for(let i = 0; i < this.curGradeStudents.length; i++) {
				let qArr = this.curGradeStudents[i].questionArr;
				for(let j = 1; j < qArr.length; j++) {
					if(qArr[j].index == q.index && standardArr[j].answer == qArr[j].answer) {
						count++;
					}
				}
			}
			return Math.round((count / (this.curGradeStudents.length - 1)) * 100);
		}

		leidaData() {
			var res = [];
			var json = {};
			var res1 = [];
			var json1 = {};
			for(let i = 0; i < this.curStudent.questionArr.length; i++){
				let arr = this.curStudent.questionArr[i].ability.split(",");
				for(let j = 0; j < arr.length; j++) {
					if(!json[arr[j]]) {
						res.push(arr[j]);
						json[arr[j]] = 1;
					}
				}
				if(!json1[this.curStudent.questionArr[i].knowledge]) {
					res1.push(this.curStudent.questionArr[i].knowledge);
					json1[this.curStudent.questionArr[i].knowledge] = 1;
				}
			}
			this.ablities = res;
			this.knowledges = res1;
		}


		/***
		 * 当前能力点下的总数
		 */
		getTotalCountByAblityName(ablity:string):number {
			let count:number = 0;
			for(let i = 0; i < this.curStudent.questionArr.length; i++) {
				let arr = this.curStudent.questionArr[i].ability.split(",");
				for(let j = 0; j < arr.length; j++) {
					if(arr[j] == ablity) {
						count++;
					}
				}
			}
			return count;
		}

		/***
		 * 获得当前能力点的平均答对数
		 */
		getAveCountByAbilityName(ability:string):number {
			let count = 0;
			for(let i = 0; i < this.curGradeStudents.length; i++) {
				count += this.getCountByAblityName(this.curGradeStudents[i].name, ability, this.curGradeStudents[i].id);
			}
			return Math.round(count / this.curGradeStudents.length);
		}

		/***
		 * 获得当前能力点下答对情况
		 */
		getCountByAblityName(name:string, ability:string, id:string):number {
			let s:Student = this.getStudent("标准答案信息", this.curGrade);
			let standardArr = s.questionArr;
			let stuAnswerArr = this.getStudent(name, this.curGrade, id).questionArr;
			let count:number = 0;
			for(let i = 0; i < stuAnswerArr.length; i++) { 
				let arr = stuAnswerArr[i].ability.split(",");
				for(let j = 0; j < arr.length; j++) {
					if(arr[j] == ability && stuAnswerArr[i].answer == standardArr[i].answer) {
						count++;
					}
				}
			}
			return count;
		}

		/***
		 * 当前知识点题目总数
		 */
		getTotalCountByKnowledge(k:string):number {
			let count = 0;
			for(let i = 0; i < this.curStudent.questionArr.length; i++) {
				if(this.curStudent.questionArr[i].knowledge == k) {
					count++;
				}
			}
			return count;
		}

		/***
		 * 获得当前知识点的平均答对数
		 */
		getAveCountByKnowledge(k:string):number {
			let count = 0;
			for(let i = 0; i < this.curGradeStudents.length; i++) {
				count += this.getCountByKnowledge(this.curGradeStudents[i].name, k, this.curGradeStudents[i].id);
			}
			return Math.round(count / this.curGradeStudents.length);
		}

		/***
		 * 获得当前知识点答对的数量
		 */
		getCountByKnowledge(name:string, k:string, id:string):number {
			let s:Student = this.getStudent("标准答案信息", this.curGrade);
			let standardArr = s.questionArr;
			let stuAnswerArr = this.getStudent(name, this.curGrade, id).questionArr;
			let count = 0;
			for(let i = 0; i < stuAnswerArr.length; i++) {
				if(stuAnswerArr[i].knowledge == k && standardArr[i].answer == stuAnswerArr[i].answer) {
					count++;
				}
			}
			return count;
		}

		/***
		 * 当前难度下的总分
		 */
		getTotalScoreByQuestionType(type:string):number {
			let score:number = 0;
			return this.getScoreByQuestionType("标准答案信息", type, "");
		}

		/***
		 * 获得当前难度下的平均分
		 */
		getAveScoreByQuestionType(type:string):number {
			let score:number = 0;
			for(let i = 0; i < this.curGradeStudents.length; i++) {
				score += this.getScoreByQuestionType(this.curGradeStudents[i].name, type, this.curGradeStudents[i].id);
			}
			return Math.round(score/ this.curGradeStudents.length);
		}

		/***
		 * 获得当前难度下得分情况
		 */
		getScoreByQuestionType(name:string, type:string, id:string):number {
			let s:Student = this.getStudent("标准答案信息", this.curGrade);
			let standardArr = s.questionArr;
			let stuAnswerArr = this.getStudent(name, this.curGrade, id).questionArr;
			let score:number = 0;
			for(let i = 0; i < stuAnswerArr.length; i++){
				if(stuAnswerArr[i].type == type && stuAnswerArr[i].answer == standardArr[i].answer) {
					score++;
				}
			}
			return score * 5;
		}

		getStudent(name:string, grade:number, id:string = ""):Student {
			this.curGradeStudents = this.studentArr[grade - 1];
			for(let i = 0; i < this.curGradeStudents.length; i++) {
				if(this.curGradeStudents[i].name == name && this.curGradeStudents[i].id == id) {
					return this.curGradeStudents[i];
				}
			}
		}

		getAllQuestion():Array<Array<Student>> {
			let data;
			let data2;
			let evaData;
			let dataArr = [];
			evaData = JSON.parse(Res.getRes("eva_txt"));
			evaData.forEach(e => {
				let eva = new Eva();
				eva.grade = parseInt(e.grade);
				eva.knowledge = e.knowledge;
				eva.eva1 = e.eva1;
				eva.eva2 = e.eva2;
				this.configEva.push(eva);
			});
			for(let i = 1; i < 7; i++) {
				data = JSON.parse(Res.getRes("q_g" + i + "_txt"));
				data2 = JSON.parse(Res.getRes("type_g" + i + "_txt"));
				let arr2:Array<Question> = [];
				let arr:Array<Student> = [];
				let res = {};
				data.forEach(e => {
					if(!res[e.身份ID + "_" + e.姓名]) {
						res[e.身份ID + "_" + e.姓名] = 1;
						let s = new Student();
						if(e.身份ID)
							s.id = e.身份ID;
						else
							s.id = "";
						if(e.IP地址)
							s.ipAddress = e.IP地址;
						else
							s.ipAddress = "";
						s.name = e.姓名;
						if(e.操作系统)
							s.os = e.操作系统;
						else
							s.os = "";
						s.score = e.测试得分;
						if(e.手机号码)
							s.phone = e.手机号码;
						else 
							s.phone = "";
						if(e.索引)
							s.index = e.索引;
						else
							s.index = 0;
						for(let j = 1; j <= 20; j++) {
							let q = new Question();
							q.index = j;
							if(e[j.toString()])
								q.answer = e[j.toString()];
							else 
								q.answer = "";
							s.questionArr.push(q);
						}
						arr.push(s);
						arr2 = [];
						data2.forEach(e => {
							let q = new Question();
							q.answer = arr[arr.length - 1].questionArr[parseInt(e.题号) - 1].answer;
							q.index = e.题号;
							q.knowledge = e.知识点;
							q.ability = e.能力;
							if(e.难 == "1") {
								q.type = "难";
							} else if(e.中 == "1") {
								q.type = "中";
							} else if(e.易 == "1") {
								q.type = "易";
							}
							arr2.push(q);
						});
						arr2.sort();
						arr[arr.length - 1].questionArr = arr2;
					}
				});
				
				dataArr.push(arr);
			}
			this.studentArr = dataArr;
			return dataArr;
		}

		loadMasterData(cb:any, ctx:any) {
			cb.call(ctx);
		}

		private static _instance:GraManager;
		public static getInstance():GraManager {
			if(this._instance == null) {
				this._instance = new GraManager();
			}
			return this._instance;
		}
	}
}