import { sceneController } from '../../../system/sceneController/sceneController';
import { buttonController } from '../../../system/button/buttonController';
import { button } from '../../../system/button/button';
import { layout } from '../../../system/layout/layout';

export class homeSceneController extends sceneController {

    private _layout: layout = new layout(8, 100, 100);
    private _buttonList: button[] = [];
    private _clickEvent: ((_button: button) => void) | null = null;

    public get layout(): layout {
        return this._layout;
    } 

    constructor(_clickEvent: (_button: button) => void) {
        super();
        this._clickEvent = _clickEvent;
    }

    protected execute(_dt: number) {
        this._buttonList.forEach((value: button) => {
            value.update(_dt);
        });
    }

    public initialize() {
        for (let i: number = 0; i < 64; ++i) {
            const _button: button = new button();
            _button.initialize('assets/pipo-map001_at-yama3.png', 100, 100, () => {
                if (this._clickEvent) {
                    this._clickEvent(_button);
                }
            });
            this._buttonList.push(_button);
        }
    }

    public getButtonController(_index: number): buttonController {
        return this._buttonList[_index].controller;
    }

    public getButtonControllerLength(): number {
        return this._buttonList.length;
    }

}