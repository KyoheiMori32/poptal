import * as PIXI from 'pixi.js';
import { controllerBase } from '../controller/controllerBase';
import { commandData } from '../command/commandData';
import { commandExecution } from '../command/commandExecution';

export class sceneController extends controllerBase {

    private _addChildCallback: ((container: PIXI.Container) => void) | null = null;
    private _addCommandCallback: ((_type: commandExecution.eType, _info:commandData.commonInfo) => void) | null = null;

    protected execute(dt: number) {
    }

    public update(dt: number) {
        this.execute(dt);
    }

    public setAddCommand(_addCommandCallback: (_type: commandExecution.eType, _info: commandData.commonInfo) => void) {
        this._addCommandCallback = _addCommandCallback;
    }

    public addCommand(_type: commandExecution.eType, _data: commandData.commonInfo) {
        if (this._addCommandCallback) {
            this._addCommandCallback(_type, _data);
        }
    }
}