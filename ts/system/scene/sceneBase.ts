export class sceneBase {

    private _changeSceneCallback: (sceneType:number) => void = (sceneType) => {};

    public update(dt: number) {
        console.log(dt);
    }

    public changeScene(sceneType: number) {
        if (this._changeSceneCallback) {
            this._changeSceneCallback(sceneType);
        }
    }

    public setChangeSceneCallback(callback: () => void) {
        this._changeSceneCallback = callback;
    }
}