module app {
	export class LiuJiaoView extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "LiuJiaoViewSkin.exml");
		}

		private _shape:egret.Shape;
		private group:eui.Group;
		private r_0:eui.Rect;
		private r_1:eui.Rect;
		private r_2:eui.Rect;
		private r_3:eui.Rect;
		private r_4:eui.Rect;
		private r_5:eui.Rect;
		private r_c:eui.Rect;
		private lab_0:eui.Label;
		private lab_1:eui.Label;
		private lab_2:eui.Label;
		private lab_3:eui.Label;
		private lab_4:eui.Label;
		private lab_5:eui.Label;
		private p_0:egret.Point;
		private p_1:egret.Point;
		private p_2:egret.Point;
		private p_3:egret.Point;
		private p_4:egret.Point;
		private p_5:egret.Point;
		private p_c:egret.Point;
		private l0:number;
		private l1:number;
		private l2:number;
		private l3:number;
		private l4:number;
		private l5:number;
		private unit0:number;
		private unit1:number;
		private unit2:number;
		private unit3:number;
		private unit4:number;
		private unit5:number;
		private rl0:number;
		private rl1:number;
		private rl2:number;
		private rl3:number;
		private rl4:number;
		private rl5:number;
		private al0:number;
		private al1:number;
		private al2:number;
		private al3:number;
		private al4:number;
		private al5:number;

		onActivity() {
			super.onActivity();
			this._shape = new egret.Shape();
			this.group.addChild(this._shape);
			this.drawBaseLine();
		}

		updateView() {
			this._shape.graphics.clear();
			this.drawBaseLine();
			let arr:Array<Array<egret.Point>> = this.getEachPoint();
			lxl.GTool.drawWuJiao(this._shape.graphics, 0x02B8F7, arr[0]);
			lxl.GTool.drawWuJiao(this._shape.graphics, 0xF42C02, arr[1]);
		}

		drawBaseLine() {
			this._shape.graphics.lineStyle(1, 0x333333);
			this._shape.graphics.beginFill(0x333333, 0.5);
			for(let i = 0; i < 6; i++) {
				this._shape.graphics.moveTo(this.r_c.x, this.r_c.y);
				this._shape.graphics.lineTo(this["r_" + i].x, this["r_" + i].y);
			}
			this._shape.graphics.endFill();
		}

		getEachPoint():Array<Array<egret.Point>> {
			this.p_c = new egret.Point(this.r_c.x, this.r_c.y);
			let kArr:Array<Array<number>> = [];
			for(let i = 0; i < 6; i++) {
				this["p_" + i] = new egret.Point(this["r_" + i].x, this["r_" + i].y);
				this["l" + i] = egret.Point.distance(this.p_c, this["p_" + i]);
				kArr.push(lxl.GTool.getKBFromTwoPoint(this.p_c, this["p_" + i]));
			}
			let arr:Array<Array<number>> = [];
			for(let i = 0; i < Gra.knowledges.length; i++) {
				let s = [];
				s.push(Gra.getTotalCountByKnowledge(Gra.knowledges[i]));
				s.push(Gra.getAveCountByKnowledge(Gra.knowledges[i]));
				s.push(Gra.getCountByKnowledge(Gra.curName, Gra.knowledges[i], Gra.curId));
				arr.push(s);
				this["lab_" + i].text = Gra.knowledges[i];
			} 
			let scorepArr:Array<egret.Point> = [];
			let avepArr:Array<egret.Point> = [];
			let px:number = 0;
			let py:number = 0;
			for(let i = 0; i < 6; i++) {
				this["unit" + i] = this["l" + i] / arr[i][0];//单元值
				
				if(i < 3) {
					this["al" + i] = this["unit" + i] * arr[i][1];//平均值
					this["rl" + i] = this["unit" + i] * arr[i][2];//个人值
					px = this.p_c.x + (Math.abs(this["p_" + i].x - this.p_c.x) * (this["rl" + i] / this["l" + i]));
				}
				else {
					this["al" + i] = this["l" + i] - this["unit" + i] * arr[i][1];//平均值
					this["rl" + i] = this["l" + i] - this["unit" + i] * arr[i][2];//个人值
					px = this["p_" + i].x + (Math.abs(this.p_c.x - this["p_" + i].x) * (this["rl" + i] / this["l" + i]));
				}
				py = kArr[i][0] * px + kArr[i][1];
				let p = new egret.Point(px, py);
				scorepArr.push(p);
				if(i < 3)
					px = this.p_c.x + (Math.abs(this["p_" + i].x - this.p_c.x) * (this["al" + i] / this["l" + i]));
				else
					px = this["p_" + i].x + (Math.abs(this.p_c.x - this["p_" + i].x) * (this["al" + i] / this["l" + i]));
				py = kArr[i][0] * px + kArr[i][1];
				let p2 = new egret.Point(px, py);
				avepArr.push(p2);
			}
			return [avepArr, scorepArr];
		}

		dispose() {
			super.dispose();
		}
	}
}