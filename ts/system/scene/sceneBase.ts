import * as PIXI from 'pixi.js';
import { stateManager } from '../state/stateManager';
import { sceneController } from '../sceneController/sceneController';

export class sceneBase {

    protected _sceneController: sceneController | null = null;
    protected _stateManager: stateManager | null = null;
    protected _nextScene: number = 0;

    protected initialize(container: PIXI.Container) {
    }

    protected execute(container: PIXI.Container, dt: number) {
    }

    protected end(container: PIXI.Container) {
    }

    protected createSceneController() {
    }

    protected createStateManager() {
    }

    public start(container: PIXI.Container) {
        this.createSceneController();
        if (this._sceneController) {
            this._sceneController.setAddChildCallback((value) => {
                container.addChild(value);
            });
        }
        this.createStateManager();
        this.initialize(container);
    }

    public update(container: PIXI.Container, dt: number) {
        this.execute(container, dt);
        if (this._sceneController) {
            this._sceneController.update(dt);
        }
        if (this._stateManager) {
            this._stateManager.update(this._sceneController, dt);
        }
    }

    public exit(container: PIXI.Container) {
        this.end(container);
        this._stateManager = null;
        this._sceneController = null;
    }

    public getNextScene(): number {
        return this._nextScene;
    }
}