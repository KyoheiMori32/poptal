import { stateManager } from '../state/stateManager';
import { sceneController } from '../sceneController/sceneController';
import { commandData } from '../command/commandData';

export class sceneBase {

    protected _sceneController: sceneController | null = null;
    protected _stateManager: stateManager | null = null;

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

    public start() {
        this.createSceneController();
        this.createStateManager();
        this.initialize();
    }

    public update(dt: number): commandData[] {
        this.execute(dt);
        if (this._sceneController) {
            this._sceneController.update(dt);
        }
        if (this._stateManager) {
            this._stateManager.update(this._sceneController, dt);
        }
        const _dataList: commandData[] = [];
        if (this._sceneController) {
            const _data: commandData = this._sceneController.popCommand();
            if (_data.type > 0) {
                _dataList.push(_data);
            }
        }
        return _dataList;
    }

    public exit() {
        this.end();
        this._stateManager = null;
        this._sceneController = null;
    }

    public resizeWindow(_width: number, _height: number) {
        if (this._stateManager) {
            this._stateManager.resizeWindow(_width, _height);
        }
    }
}