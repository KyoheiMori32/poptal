import { buttonState } from "./buttonState";
import { buttonController } from "../buttonController";
import { buttonStateManager } from "./buttonStateManager";

export class buttonStateInit extends buttonState {

    protected initialize(_controller: buttonController | null) {
    }

    protected execute(_controller: buttonController | null, dt: number) {
        if (_controller && _controller.thumbnail.controller.isLoad) {
            if (_controller) {
                _controller.setting();
            }
            this._nextState = buttonStateManager.eState.wait;
        }
    }

    protected end(_controller: buttonController | null) {
    }

}