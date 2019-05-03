import { buttonState } from "./buttonState";
import { buttonController } from "../buttonController";
import { buttonStateManager } from "./buttonStateManager";

export class buttonStateInit extends buttonState {

    private _loopCount: number = 0;

    protected initialize(_controller: buttonController | null) {
        if (_controller) {
            _controller.load();
        }
        this._loopCount = 0;
    }

    protected execute(_controller: buttonController | null, dt: number) {
        if (this._loopCount > 1) {
            if (_controller) {
                _controller.setting();
            }
            this._nextState = buttonStateManager.eState.wait;
        }
        ++this._loopCount;
    }

    protected end(_controller: buttonController | null) {
        this._loopCount = 0;
    }

}