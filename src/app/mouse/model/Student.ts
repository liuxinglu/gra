module app {
	export class Student {
		public constructor() {
		}
		questionArr:Array<Question> = [];//题目列表
		name:string = "";//考生姓名
		id:string = "";//身份ID
		score:number = 0;//分数
		ipAddress:string = "";//ip地址
		os:string = "";//操作系统
		phone:string = "";//手机号码
		index:number = 0;//索引
	}
}