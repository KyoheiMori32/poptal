import { sceneController } from '../../../system/sceneController/sceneController';
import { buttonController } from '../../../system/button/buttonController';
import { button } from '../../../system/button/button';

export class homeSceneController extends sceneController {

    private _button: button = new button();

    public get buttonController(): buttonController {
        return this._button.controller;
    }

    protected execute(dt: number) {
        this._button.update(dt);
    }

    public initialize() {
        this._button.initialize('assets/pipo-map001_at-yama3.png', () => {
            console.log('aaaaaaaaaaaaaaa');
        });
    }

}