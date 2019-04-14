import { sceneBase } from "./sceneBase";

export class sceneManager {

    private _scene: sceneBase = new sceneBase();

    changeScene(sceneType: number) {
    }

    public update(dt: number) {
        if (this._scene) {
            this._scene.update(dt);
        }
    }
}