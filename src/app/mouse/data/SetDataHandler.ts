module app {
	export class SetDataHandler {

		public static instance:app.SetDataHandler;
		public static INSERT_STUDENT:string = "insertStudent";
		public static FIND_STUDENT:string = "findStudent";
		
		public static setHandlers() {
			if(this.instance == null) {
				this.instance = new app.SetDataHandler();
			}
		}

		public constructor() {
			lxl.GlobalData.getInstance().dataManager.addDataHandler(new SayHelloDataHandler());
			lxl.GlobalData.getInstance().dataManager.addDataHandler(new FindStudentHandler());
		}

		public insertStudent() {
			let d:lxl.interfaces.IDataHandler = lxl.GlobalData.getInstance().dataManager.getDataHandler(SetDataHandler.INSERT_STUDENT);
			let b:lxl.data.BaseData = new lxl.data.BaseData();
			b.arr.push(new lxl.data.Map("name", "liuxing"));
			b.arr.push(new lxl.data.Map("age", "28"));
			b.arr.push(new lxl.data.Map("sex", 1));
			d.send(b);
		}

		public findStudent() {
			let d:lxl.interfaces.IDataHandler = lxl.GlobalData.getInstance().dataManager.getDataHandler(SetDataHandler.FIND_STUDENT);
			let b:lxl.data.BaseData = new lxl.data.BaseData();
			b.arr.push(new lxl.data.Map("name", "liuxing"));
			d.send(b);
		}
	}
}