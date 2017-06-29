module app {
	export class SayHelloDataHandler extends lxl.data.BaseDataHandler{
		public constructor() {
			super();
		}

		getCode():string {
			return SetDataHandler.INSERT_STUDENT;
		}

		handlerPackage(d:lxl.data.BaseData) {
			super.handlerPackage(d);
			var baseData:lxl.data.BaseData = this.data.readObj();
			this.handComplete();
		}

		send(params:lxl.data.BaseData) {
			let pkg:lxl.interfaces.IPackageOut = new lxl.data.PackageOut(SetDataHandler.INSERT_STUDENT);
			pkg.writeArray(params.arr);
			lxl.GlobalData.getInstance().dataManager.send(pkg);
		}
	}
}