module app {
	export class FindStudentHandler extends lxl.data.BaseDataHandler{
		public constructor() {
			super();
		}

		getCode():string {
			return SetDataHandler.FIND_STUDENT;
		}

		handlerPackage(d:lxl.data.BaseData) {
			super.handlerPackage(d);
			let baseData = this.data.readObj();
			let data = JSON.parse(baseData.toString());
			lxl.logs.log(data.name);
			this.handComplete();
		}

		send(p:lxl.data.BaseData) {
			let pkg:lxl.interfaces.IPackageOut = new lxl.data.PackageOut(SetDataHandler.FIND_STUDENT);
			pkg.writeArray(p.arr);
			lxl.GlobalData.getInstance().dataManager.send(pkg);
		}
	}
}