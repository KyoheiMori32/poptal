import { homeState } from "./homeState";
import { homeSceneController } from "../scene/homeSceneController";
import { homeStateManager } from "./homeStateManager";
import { commandExecution } from "../../../system/command/commandExecution";

export class homeStateInit extends homeState {

    protected initialize(_controller: homeSceneController | null) {
        if (_controller) {
            _controller.initialize();
        }
    }

    protected execute(_controller: homeSceneController | null, dt: number) {
        if (_controller && _controller.buttonController.isLoad) {
            const _info: commandExecution.addChildInfo = {
                _container: _controller.buttonController.sprite,
            };
            _controller.addCommand(commandExecution.eType.AddChild, _info);
            this._nextState = homeStateManager.eState.wait;
        }
    }

    protected end(_controller: homeSceneController | null) {
    }

}