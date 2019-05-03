import { sceneController } from '../../../system/sceneController/sceneController';
import { buttonController } from '../../../system/button/buttonController';
import { button } from '../../../system/button/button';

export class homeSceneController extends sceneController {

    private _button: button = new button();
    private _clickEvent: ((_button: button) => void) | null = null;

    constructor(_clickEvent: (_button: button) => void) {
        super();
        this._clickEvent = _clickEvent;
    }

    public get buttonController(): buttonController {
        return this._button.controller;
    }

    protected execute(_dt: number) {
        this._button.update(_dt);
    }

    public initialize() {
        this._button.initialize('assets/pipo-map001_at-yama3.png', 500, 500, () => {
            if (this._clickEvent) {
                this._clickEvent(this._button);
            }
        });
    }

}