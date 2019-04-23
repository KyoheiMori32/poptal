import { buttonState } from "./buttonState";
import { buttonController } from "../buttonController";
import { buttonStateManager } from "./buttonStateManager";

export class buttonStateInit extends buttonState {

    protected initialize(_controller: buttonController | null) {
        if (_controller) {
            _controller.load();
        }
    }

    protected execute(_controller: buttonController | null, dt: number) {
        this._nextState = buttonStateManager.eState.wait;
    }

    protected end(_controller: buttonController | null) {
    }

}