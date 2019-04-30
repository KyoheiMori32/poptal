import * as PIXI from 'pixi.js';
import { stateManager } from '../state/stateManager';
import { sceneController } from '../sceneController/sceneController';
import { commandExecution } from '../command/commandExecution';
import { commandData } from '../command/commandData';

export class sceneBase {

    protected _sceneController: sceneController | null = null;
    protected _stateManager: stateManager | null = null;
    protected _nextScene: number = 0;

    protected initialize() {
    }

    protected execute(dt: number) {
    }

    protected end() {
    }

    protected createSceneController() {
    }

    protected createStateManager() {
    }

    public start(_addCommandCallback: (_type: commandExecution.eType, _info: commandData.commonInfo) => void) {
        this.createSceneController();
        if (this._sceneController) {
            this._sceneController.setAddCommand(_addCommandCallback);
        }
        this.createStateManager();
        this.initialize();
    }

    public update(dt: number) {
        this.execute(dt);
        if (this._sceneController) {
            this._sceneController.update(dt);
        }
        if (this._stateManager) {
            this._stateManager.update(this._sceneController, dt);
        }
    }

    public exit() {
        this.end();
        this._stateManager = null;
        this._sceneController = null;
    }

    public getNextScene(): number {
        return this._nextScene;
    }
}