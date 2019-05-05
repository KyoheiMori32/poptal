import { homeState } from "./homeState";
import { homeSceneController } from "../scene/homeSceneController";
import { homeStateManager } from "./homeStateManager";
import { commandExecution } from "../../../system/command/commandExecution";
import { buttonController } from "../../../system/button/buttonController";

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
                    const _info: commandExecution.addChildInfo = {
                        _container: _buttonController.thumbnail.controller.background,
                    };
                    _controller.addCommand(commandExecution.eType.AddChild, _info);
                    if (_buttonController.thumbnail.controller.background) {
                        _controller.layout.addChild(_buttonController.thumbnail.controller.background);
                    }
                }
                this._nextState = homeStateManager.eState.wait;
            }
        }
    }

    protected end(_controller: homeSceneController | null) {
    }

}