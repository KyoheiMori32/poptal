import * as PIXI from 'pixi.js';
import { controllerBase } from '../controller/controllerBase';

export class sceneController extends controllerBase {

    private _addChildCallback: ((container: PIXI.Container) => void) | null = null;

    protected execute(dt: number) {
    }

    public update(dt: number) {
        this.execute(dt);
    }

    public setAddChildCallback(_addChildCallback: ((container: PIXI.Container) => void) | null) {
        this._addChildCallback = _addChildCallback;
    }

    public addChild(container: PIXI.Container | null) {
        if (container) {
            if (this._addChildCallback) {
                this._addChildCallback(container);
            }
        }
    }

}