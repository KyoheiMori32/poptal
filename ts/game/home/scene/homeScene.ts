import * as PIXI from 'pixi.js';
import { sceneBase } from "../../../system/scene/sceneBase";
import { homeSceneController } from './homeSceneController';
import { homeStateManager } from '../state/homeStateManager';
import { button } from '../../../system/button/button';

export class homeScene extends sceneBase {

    protected initialize(container: PIXI.Container) {
        if (this._stateManager) {
            this._stateManager.start(homeStateManager.eState.init);
        }
    }

    protected execute(container: PIXI.Container, dt: number) {
    }

    protected end(container: PIXI.Container) {
    }

    protected createSceneController() {
        this._sceneController = new homeSceneController((_button: button) => {
            const _homeStateManager: homeStateManager = this._stateManager as homeStateManager;
            if (_homeStateManager) {
                _homeStateManager.clickButtonEvent(_button);
            }
        });
    }

    protected createStateManager() {
        this._stateManager = new homeStateManager();
    }
    
}