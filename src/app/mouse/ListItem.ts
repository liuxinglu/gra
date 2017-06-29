module app {
	export class ListItem extends lxl.CComponent{
		public constructor() {
			super(lxl.Config.SKIN_PATH + "ListItemSkin.exml");
		}

		private lab:eui.Label;
		private _index:number;

		onActivity() {
			super.onActivity();
			this.lab.addEventListener(egret.TouchEvent.TOUCH_TAP, this._clickHandler, this);
		}

		private _clickHandler(e:egret.TouchEvent) {
			lxl.CDispatcher.getInstance().dispatch(new lxl.CEvent(lxl.CEvent.CLICK, this._index));
		}

		setLabelText(str:string) {
			this.lab.text = str;
		}

		setIndex(index:number) {
			this._index = index;
		}

		dispose() {
			super.dispose();
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._clickHandler, this);
		}
	}
}