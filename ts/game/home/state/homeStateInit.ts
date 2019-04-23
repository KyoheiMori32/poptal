import { homeState } from "./homeState";
import { homeSceneController } from "../scene/homeSceneController";
import { homeStateManager } from "./homeStateManager";

export class homeStateInit extends homeState {

    protected initialize(_controller: homeSceneController | null) {
        if (_controller) {
            _controller.initialize();
        }
    }

    protected execute(_controller: homeSceneController | null, dt: number) {
        if (_controller && _controller.buttonController.isLoad) {
            _controller.addChild(_controller.buttonController.sprite);
            this._nextState = homeStateManager.eState.wait;
        }
    }

    protected end(_controller: homeSceneController | null) {
    }

}