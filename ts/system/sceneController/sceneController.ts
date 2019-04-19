import * as PIXI from 'pixi.js';

export class sceneController {

    private _addChildCallback: ((container: PIXI.Container) => void) | null = null;

    public setAddChildCallback(_addChildCallback: ((container: PIXI.Container) => void) | null) {
        this._addChildCallback = _addChildCallback;
    }

    public addChild(container: PIXI.Container) {
        if (this._addChildCallback) {
            this._addChildCallback(container);
        }
    }

}