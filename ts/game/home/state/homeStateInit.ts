import { homeState } from "./homeState";
import { homeSceneController } from "../scene/homeSceneController";
import { homeStateManager } from "./homeStateManager";
import { buttonController } from "../../../system/button/buttonController";
import { sceneCommandExecution } from "../../../system/scene/command/sceneCommandExecution";

export class homeStateInit extends homeState {

    protected initialize(_controller: homeSceneController | null) {
        if (_controller) {
            _controller.initialize();
        }
    }

    protected execute(_controller: homeSceneController | null, dt: number) {
        if (_controller) {
            const _buttonControllerLength: number = _controller.getButtonControllerLength();
            let _loadFlag: boolean = true;
            for (let i: number = 0; i < _buttonControllerLength; ++i) {
                const _buttonController: buttonController = _controller.getButtonController(i);
                if (!_buttonController.isLoad) {
                    _loadFlag = false;
                    break;
                }
            }
            if (_loadFlag) {
                for (let i: number = 0; i < _buttonControllerLength; ++i) {
                    const _buttonController: buttonController = _controller.getButtonController(i);
                    if (_buttonController.thumbnail.controller.background) {
                        _controller.layout.addChild(_buttonController.thumbnail.controller.background);
                    }
                }
                const _info: sceneCommandExecution.addChildInfo = {
                    _renderer: null,
                    _root: null,
                    _container: _controller.layout.root,
                };
                _controller.addCommand(sceneCommandExecution.eType.AddChild, _info);
                _controller.layout.root.x = window.innerWidth / 2;
                this._nextState = homeStateManager.eState.wait;
            }
        }
    }

    protected end(_controller: homeSceneController | null) {
    }

}